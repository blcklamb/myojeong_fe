import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import client from "./client";

// * GET 요청 보내기 *
/**
 * @interface GETWishListRequest
 * 소원 리스트 GET API 요청 Request
 */
interface GETWishListRequest {
  sorted: string;
  page?: number;
  keyword?: string;
}
/**
 * @interface GETWishListResponse
 * 소원 리스트 GET API 요청 Response
 */
interface GETWishListResponse {
  wish_list: wishListItem[];
}

export interface wishListItem {
  id: number;
  from_name: string;
  content: string;
  sp1: number;
  sp2: number;
  sp3: number;
}

const useGETWishList = (params: GETWishListRequest) => {
  const { sorted } = params;
  return useQuery<GETWishListResponse>(
    ["wishList", sorted],
    async (): Promise<GETWishListResponse> => {
      const { data } = await client.get<GETWishListResponse>(`/wish/list`, {
        params: { ...params },
      });
      return data;
    },
    {
      refetchOnWindowFocus: true,
      refetchIntervalInBackground: true,
      retry: 0,
      //   enabled: !sorted,
    }
  );
};

const useGetInfiniteWishList = (params: GETWishListRequest) => {
  const { sorted } = params;
  return useInfiniteQuery(
    ["wishList", sorted],
    ({ pageParam = 1 }) => client.get(`wish/list`, { params: { ...params, page: pageParam } }),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.data.wish_list.length === 10 ? lastPage.config.params.page + 1 : undefined;
      },
    }
  );
};

interface POSTLikeRequest {
  id: number;
  type: string;
}
/**
 * @interface POSTLikeResponse
 * 소원작성 POST API 요청 Response
 */
interface POSTLikeResponse {
  id: number;
  success: boolean;
}

const usePOSTLike = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (like: POSTLikeRequest): Promise<POSTLikeResponse> => {
      const { data } = await client.post(`/wish/like`, like);
      return data;
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["wishList"] });
    },
  });
};

export { useGETWishList, useGetInfiniteWishList, usePOSTLike };

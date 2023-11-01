import { styled } from "styled-components";
import TopButton from "./TopButton";
import Paragraph from "./Paragraph";
import RainingSongpyeon from "./RainingSongpyeon";
import { StyledHiddenLayout } from "./Intro";

interface TurnProps {
  onNext: () => void;
  onSkip: () => void;
}

const Turn = ({ onNext, onSkip }: TurnProps) => {
  return (
    <StyledWrapper>
      <StyledTop>
        <TopButton text="이야기 넘어가기" onClick={onSkip} />
      </StyledTop>
      <StyledHiddenLayout onClick={() => onNext()} />
      <StyledMiddle>
        <RainingSongpyeon />
      </StyledMiddle>
      <StyledBottom>
        <Paragraph align="center">
          {`지구 사람들을 바라보니
            걱정이 너무 많은 것 같아오!`}
        </Paragraph>
        <Paragraph align="center">
          {`그래서 소원을 주문받아서
            송편을 나눠 줄 거애오.`}
        </Paragraph>
      </StyledBottom>
    </StyledWrapper>
  );
};

export default Turn;

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledTop = styled.div`
  display: flex;
  justify-content: end;
`;

const StyledMiddle = styled.div`
  margin-top: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBottom = styled.div`
  margin-top: 18.9rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

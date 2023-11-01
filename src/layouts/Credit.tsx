import styled from "styled-components";
import SP12 from "assets/credit/sp12.png";
import SP13 from "assets/credit/sp13.png";
import Jeong from "assets/credit/jeong.png";
import Taylor from "assets/credit/taylor.png";
import Nimgnas from "assets/credit/nimgnas.png";
import { COLORS } from "styles/color";
import Icon from "components/Icon";
import Button from "components/story/Button";
import { useNavigate } from "react-router-dom";
import { animated } from "react-spring";
import useReactSpring from "hooks/useReactSpring";

const Credit = () => {
  const TEAM_DATA = [
    {
      imgSrc: Jeong,
      alt: "jeong",
      name: "쩡",
      githubLink: "https://github.com/blcklamb",
    },
    {
      imgSrc: Taylor,
      alt: "taylor",
      name: "테일러",
      githubLink: "https://github.com/zeonga1102",
    },
    {
      imgSrc: Nimgnas,
      alt: "nimgnas",
      name: "상민",
      githubLink: "https://github.com/nimgnas",
    },
  ];

  const navigate = useNavigate();

  const { useShaking } = useReactSpring;
  const [styles] = useShaking();

  return (
    <>
      <StyledTop>
        <img src={SP12} alt="right-songpyeon" />
        <StyledH1>Credit</StyledH1>
        <img src={SP13} alt="right-songpyeon" />
      </StyledTop>
      <StyledMiddle>
        <StyledCrewWrapper>
          {TEAM_DATA.map((ele) => {
            const { githubLink, imgSrc, alt, name } = ele;
            return (
              <StyledCrew
                key={ele.alt}
                onClick={() => window.open(githubLink, "_newtab")}
              >
                <animated.div style={{ ...styles }}>
                  <img src={imgSrc} alt={alt} />
                </animated.div>
                <StyledName>{name}</StyledName>
              </StyledCrew>
            );
          })}
        </StyledCrewWrapper>
        <StyledGithubWrapper>
          <StyledGithub
            onClick={() =>
              window.open("https://github.com/blcklamb/myojeong_fe", "_newtab")
            }
          >
            <Icon name="github" width={34} height={34} />
            <StyledName>프론트엔드 레포지토리</StyledName>
          </StyledGithub>
          <StyledGithub
            onClick={() =>
              window.open(
                "https://github.com/zeonga1102/myojeong_BE",
                "_newtab"
              )
            }
          >
            <Icon name="github" width={34} height={34} />
            <StyledName>백엔드 레포지토리</StyledName>
          </StyledGithub>
        </StyledGithubWrapper>
      </StyledMiddle>
      <StyledBottom>
        <Button
          text="처음으로 가기"
          color="LIGHT_BROWN"
          type="primary"
          onClick={() => navigate("/")}
        />
      </StyledBottom>
    </>
  );
};

export default Credit;

const StyledTop = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.6rem;

  margin-top: 13rem;
`;

const StyledH1 = styled.h1`
  color: ${COLORS.WHITE};
  font-size: 3.6rem;
`;

const StyledMiddle = styled.div`
  margin-top: 11rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const StyledCrewWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.2rem;
`;
const StyledCrew = styled.div``;
const StyledName = styled.div`
  color: ${COLORS.WHITE};
  font-size: 2.8rem;
`;
const StyledGithubWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
`;

const StyledGithub = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
`;

const StyledBottom = styled.div`
  margin-top: 8rem;
`;

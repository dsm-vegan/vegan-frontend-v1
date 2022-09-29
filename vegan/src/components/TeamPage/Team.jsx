import styled from "styled-components";
import Member from "./Member";

function Team() {
  return (
    <>
      <Header>
        <HeaderLeft>
          <img src="./Logo.png" className="logo" />
        </HeaderLeft>
        <HeaderRight>
          <img src="./search.png" />
          <img src="./witing.png" />
          <User>
            <Profile/>
            <Name>황진성</Name>
          </User>
        </HeaderRight>
      </Header>
      <Introduction>
        <Title>Team Vegans 소개</Title>
        <Contant>
          모든 비건들이 편하게 소통하고 공유할 수 있도록 항상 노력하고 있습니다.
        </Contant>
      </Introduction>
      <IntroductionTeam>
        <Subtitle>팀소개</Subtitle>
        <Member name="조우상" field="Frontend" email="woosang3078@gmail.com" />
        <Member name="황진성" field="Frontend" email="imhjs2023@gmail.com" />
        <Member name="김진건" field="Frontend" email="jingeon27@gmail.com" />
        <Member name="박휘응" field="Backend" email="whee050916@gmail.com" />
      </IntroductionTeam>
    </>
  );
}

const Header = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
`;

const HeaderLeft = styled.div`
  width: 50%;
  float: left;
  .logo {
    width: 150px;
    margin-left: 150px;
  }
`;

const HeaderRight = styled.div`
  width: 50%;
  float: right;
  display: flex;
  align-items: center;
`;

const User = styled.div`
  display: flex;
`;

const Profile = styled.div`
  background-color: black;
  width: 35px;
  height: 35px;
  border-radius: 20px;
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const Introduction = styled.div`
  width: 100%;
  height: 200px;
  background-color: #3bd883;
  cursor: default;
`;

const Title = styled.p`
  color: white;
  font-size: 30px;
  font-weight: 600;
  margin: 0;
  margin-left: 150px;
  cursor: default;
`;

const Contant = styled.p`
  color: white;
  font-size: 20px;
  margin-left: 150px;
  cursor: default;
`;

const IntroductionTeam = styled.div`
  width: 100%;
  height: calc(100vh - 320px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Subtitle = styled.div`
  width: 75px;
  margin-left: 150px;
  margin-top: 40px;
  font-size: 25px;
  font-weight: 800;
  border-bottom: 4px solid;
`;

export default Team;

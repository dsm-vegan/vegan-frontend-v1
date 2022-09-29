import styled from "styled-components";

function Admin() {
  return (
    <>
      <Header>
        <img src="./Logo.png" className='logo'/>
        <PageName>admin</PageName>
      </Header>
      <Page>
        <Contents>
          <UserListBtn>사용자 목록</UserListBtn>
          <SuspensionBtn>이용 정지 사용자</SuspensionBtn>

        </Contents>
        <UserList>

        </UserList>
      </Page>
    </>
  );
}

const Header = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  .logo {
    width: 150px;
    margin-left: 150px;
  }
`;

const PageName = styled.p`
  margin-left: 60px;
  font-size: 25px;
  font-weight: 600;
`;

const Page = styled.div`
  
`;

const Contents = styled.div`
  width: 300px;
  height: calc(100vh - 120px);
  display: grid;
  justify-content: center;
  background-color: #F8FBFF;
`;

const UserListBtn = styled.button`
  background-color: #F8FBFF;
  color: #BCBCBC;
  font-size: 17px;
  border: 0;
  width: 200px;
  height: 50px;
  border-radius: 20px;
`;

const SuspensionBtn = styled.button`
  border: 0;
  width: 200px;
  height: 50px;
  background-color: #F8FBFF;
  color: #BCBCBC;
  font-size: 17px;
`;

const UserList = styled.div`
  background-color: #EEEEEE;
`;


export default Admin; 
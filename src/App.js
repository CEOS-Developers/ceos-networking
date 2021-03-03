import styled from "styled-components";
import logoImage from "./assets/logo.png";
import ProfileList from "./components/ProfileList";

function App() {
  return (
    <Wrapper>
      <Header>
        <Logo src={logoImage}></Logo>
        <NewProfileButton>프로필 작성하기</NewProfileButton>
      </Header>
      <Content>
        <ProfileList></ProfileList>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 5%;
  height: 55px;

  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  z-index: 2;
`;

const Logo = styled.img`
  height: 100%;
`;

const Content = styled.main`
  padding: 20px 6%;
`;

const NewProfileButton = styled.button`
  all: unset;
  font-size: 0.9rem;
  font-weight: bold;
  background-color: var(--ceos);
  color: white;
  padding: 5px;
  border-radius: 3px;
`;

export default App;

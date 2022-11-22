import styled from "styled-components";

const Header = () => {
  return <HeaderContainer></HeaderContainer>;
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 1000px;
  height: 70px;
  background-color: #4d4d4d;
  border-bottom: 1px solid #3e3e3e;
`;

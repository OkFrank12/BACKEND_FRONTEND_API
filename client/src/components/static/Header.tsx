import styled from "styled-components";
import { FaRunning } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <div>
            <Logo />
            <span style={{color: "dodgerblue"}}>FARUNNER</span>
          </div>
          <NavsHolder>
            <Navs to="/">BMI</Navs>
            <Navs to="/weather">WEATHER</Navs>
            <Navs to="/car">CARS</Navs>
            <Navs to="/book">BOOKS</Navs>
          </NavsHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  background-color: #1b1a1a;
  position: fixed;
  z-index: 40;
`;

const Main = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(FaRunning)`
  color: white;
  font-size: 50px;
`;

const NavsHolder = styled.div`
  display: flex;
`;

const Navs = styled(NavLink)`
  text-decoration: none;
  color: white;
  margin: 0 20px;
  width: 130px;
  height: 50px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;

  &.active {
    background-color: dodgerblue;
  }

  :hover {
    background-color: dodgerblue;
  }
`;

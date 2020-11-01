import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  background-color:#fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.5);
  color: #000;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 1rem;
  ${'' /* position:sticky;
  top:0;
  left: 0; */}
  z-index:10;
  ${'' /* margin-top:-65px; */}
`;

export const NavbarContainer = styled.div`
  height: 100%;
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 0 25px;
  
`;

export const NavLogo = styled(LinkR)`
  color : #000;
  justify-self:flex-start;
  cursor: pointer;
  font-size:1.2rem;
  display:flex;
  align-items:center;
  margin-left:24px;
  font-weight:bold;
  text-decoration:underline;
`;

export const MobileNav = styled.div`
  display:none;

  @media screen and (max-width: 768px){
    display:block;
    position:absolute;
    top:-15px;
    right:0;
    transform :translate(-100%,60%);
    font-size:1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display:flex;
  align-items : center;
  list-style:none;
  text-align:center;
  margin-right:-22px;
  height:100%;

  @media screen and (max-width:768px){
    display : none;
  }
`;

export const NavItem = styled.li`
  height: inherit;
  display:flex;
  align-items : center;
  justify-content:center;
`;

export const NavLink = styled(LinkR)`
  display:flex;
  align-items:center;
  text-decoration:none;
  color:#000;
  height:100%;
  padding: 0 1rem;
  transition: .2s ease-in-out ;
`;
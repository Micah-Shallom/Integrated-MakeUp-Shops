import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import ThemeColor from "../../ThemeProvider";

export const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  background:linear-gradient(150deg, ${ThemeColor.Darker_Red},${ThemeColor.Medium_Green}) ;
  box-shadow: 0 2px 5px rgba(0,0,0,0.5);
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 1.2rem;
  z-index:10;
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
  justify-self:flex-start;
  color:#fff;
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
  color:#fff;

  @media screen and (max-width: 768px){
    display:block;
    position:absolute;
    top:-7px;
    right:0;
    transform :translate(-100%,60%);
    font-size:1.75rem;
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
  position: relative;

  &::after{
    content: '';
    width: 0%;
    background-color:${ThemeColor.Darker_Red};
    height: 5px;
    margin: auto;
    display: block;
    transition: .2s ease-in-out all;
    position:absolute;
    bottom:12px;
    border-radius:20px;
  }

  &:hover::after{
    width:100%;
  }
`;

export const NavLink = styled(LinkR)`
  color:#fff;
  display:flex;
  align-items:center;
  text-decoration:none;
  padding: 0 1rem;
  transition: .2s ease-in-out ;
`;
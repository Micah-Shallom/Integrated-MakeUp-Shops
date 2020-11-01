import { FaTimes } from "react-icons/fa";
import {  Link } from "react-router-dom";
import styled from "styled-components";


export const SideBarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width : 100%;
  height : 100%;
  background: #0d0d0d;
  display:grid;
  align-items:center;
  left:0;
  top: 0;
  transition: .3s ease-in-out;
  opacity:${({isOpen}) => (isOpen ? '1' : '0')};
  top : ${({isOpen}) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position:absolute;
  top:1.2rem;
  right:1.5rem;
  background:transparent;
  font-size: 2rem;
  cursor: pointer;
  outline:none;
`;

export const SideBarWrapper = styled.div`
  color : #fff;
`;

export const SideBarMenu = styled.ul`
  display :grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align:center;

  @media screen and (max-width: 768px){
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SideBarLink = styled(Link)`
  display:flex;
  align-items:center;
  justify-self:center;
  font-size:1.5rem;
  text-decoration:none;
  list-style:none;
  transition: .2s ease-in-out;
  color:#fff;
  cursor:pointer;

  &:hover{
    color: #01bf71;
  }
`;


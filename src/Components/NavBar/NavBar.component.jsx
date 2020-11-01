import React, { useState } from 'react';
import {FaBars} from 'react-icons/fa';
import {
  Nav,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
  NavbarContainer,
  MobileNav
} from './NavBar.styles'

const NavBar = ({toggle}) => {

  return (
    <Nav>
      <NavbarContainer>
      {/* NavLogo */}
        <NavLogo to='/'>MakeUp Studio</NavLogo>

      {/* MobileLink */}
        <MobileNav onClick={toggle}>
          <FaBars/>
        </MobileNav>

      {/* NavLink */}
      <NavMenu>
        <NavItem>
          <NavLink to='/home'>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/about'>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/agent'>Agents</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/shop'>Shops</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/home'>Search</NavLink>
        </NavItem>
      </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}

export default NavBar

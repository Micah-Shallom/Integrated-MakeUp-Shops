import React from 'react';
import {FaBars} from 'react-icons/fa';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase';
import { selectCurrentUser } from '../../Redux/UserAuth/UserSelectors';
import {
  Nav,
  NavItem,
  NavLink,
  NavLogo,
  NavMenu,
  NavbarContainer,
  MobileNav
} from './NavBar.styles'

const NavBar = ({toggle,currentUser}) => {

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
       {
         currentUser ? 
         (
           <>
          <NavItem>
          <NavLink to='/home/dashboard'>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/about'>About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/agent'>Agents</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/shops'>Shops</NavLink>
        </NavItem>
        </>
         ) : ''
       }
        <NavItem>
          {
            !currentUser ? 
            <NavLink to='/signin'>Sign In</NavLink> : <NavLink as='div' onClick={() => auth.signOut()}>Sign Out</NavLink>
          }
        </NavItem>
      </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

export default connect(mapStateToProps)(NavBar);

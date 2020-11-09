import React, { useState } from 'react';
import {SideBarContainer,SideBarLink,SideBarMenu,SideBarWrapper,Icon,CloseIcon} from './SideBar.styles'

const SideBar = ({isOpen,toggle}) => {

  return  (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
      <CloseIcon/>
    </Icon>
    <SideBarWrapper>
      <SideBarMenu>
        <SideBarLink to='/home/dashboard' onClick={toggle} >Home</SideBarLink>
        <SideBarLink to='/about' onClick={toggle}>About</SideBarLink>
        <SideBarLink to='/agent' onClick={toggle}>Agent</SideBarLink>
        <SideBarLink to='/shop' onClick={toggle}>Shop</SideBarLink>
        <SideBarLink to='/search' onClick={toggle}>Search</SideBarLink>
      </SideBarMenu>
    
    </SideBarWrapper>
  </SideBarContainer>
  )
}

export default SideBar

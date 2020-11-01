import React from 'react';
import AdminLayout from '../Admin/AdminLayout.component';
import DashBoard from '../DashBoard/DashBoard.component';
import Profile from '../Profile/Profile.component';
import {MainLayoutContainer} from './MainLayout.styles'

const MainLayout = () => {
  return (
   <MainLayoutContainer>
      {/* <DashBoard/> */}
      {/* <Profile/> */}
      <AdminLayout/>
   </MainLayoutContainer>
  )
}

export default MainLayout;

import React from 'react';
import DashBoardLayout from '../../Layouts/DashboardLayout/DashBoardLayout.component';
import MainLayout from '../../Layouts/MainLayout/MainLayout.component';
import {HomePageContainer} from './HomePage.styles';


const HomePage = () => {
  

  return (
    <HomePageContainer>

      <DashBoardLayout/>
      <MainLayout/>

    </HomePageContainer>
  )
}

export default HomePage;

import React from 'react';
import AdminLayout from '../Admin/AdminLayout.component';
import BusinessOwners from '../Business Owners/BusinessOwners.component';
import DashBoard from '../DashBoard/DashBoard.component';
import Header from '../MainLayoutHeader/Header.component';
import Profile from '../Profile/Profile.component';
import {MainLayoutContainer, MainPageContainer} from './MainLayout.styles';
import {BrowserRouter as Router , Route, Switch, withRouter,Redirect} from 'react-router-dom'
import Students from '../Students/Students.component';
import DashBoardLayout from '../DashboardLayout/DashBoardLayout.component'

const MainLayout = ({match : {params : {page}}}) => {
  return (
   <MainLayoutContainer>

    <DashBoardLayout/>
    
    <MainPageContainer>

      <Header/>
      {page === 'dashboard' && <DashBoard/>}
      {page === 'admin' && <AdminLayout/>}
      {page === 'profile' && <Profile/>}
      {page === 'businessowner' && <BusinessOwners/>}
      {page === 'students' && <Students/>}

    </MainPageContainer>

      {/* <Router>
        <Switch>
          <Route exact path={`${url}/dashboard`} component={DashBoard} />
          <Route path={`${url}/profile`} component={Profile} />
          <Route path={`${url}/admin`} component={AdminLayout} />
          <Route path={`${url}/businessowner`} component={BusinessOwners} />
          <Route path={`${url}/students`} component={Students} />
          <Route />
        </Switch>
      </Router> */}

   </MainLayoutContainer>
  )
}

export default MainLayout;

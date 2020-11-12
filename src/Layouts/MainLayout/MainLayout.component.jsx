import React from 'react';
import AdminLayout from '../Admin/AdminLayout.component';
import BusinessOwners from '../Business Owners/BusinessOwners.component';
import DashBoard from '../DashBoard/DashBoard.component';
import Header from '../MainLayoutHeader/Header.component';
import Profile from '../Profile/Profile.component';
import {MainLayoutContainer, MainPageContainer} from './MainLayout.styles';
import Students from '../Students/Students.component';
import DashBoardLayout from '../DashboardLayout/DashBoardLayout.component'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../Redux/UserAuth/UserSelectors';
import { CircularProgress } from '@material-ui/core';

const MainLayout = ({currentUser, match : {params : {page}}}) => {
  return (
   <MainLayoutContainer>

    <DashBoardLayout/>
    
    <MainPageContainer>

      <Header/>
      <div className="body">
        {
          currentUser ?
          <>
          {page === 'dashboard' && <DashBoard/>}
          {page === 'admin' && <AdminLayout/>}
          {page === 'profile' && <Profile currentUser={currentUser}/>}
          {page === 'businessowner' && <BusinessOwners/>}
          {page === 'students' && <Students/>}
          </>: 
          <div className="progress">
            <CircularProgress size={80} color='secondary'/>
          </div>
        }
      </div>
    
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

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})


export default connect(mapStateToProps)(MainLayout);

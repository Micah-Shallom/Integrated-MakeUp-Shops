import React from 'react';
import MainLayout from '../../Layouts/MainLayout/MainLayout.component';
import {HomePageContainer} from './HomePage.styles';
import {BrowserRouter as Router , Route, Switch, Redirect} from 'react-router-dom'

const HomePage = () => {
  

  return (
    <HomePageContainer>

      <Router>
        <Switch>
          <Redirect exact from='/home' to='/home/dashboard'  />
          <Route exact path='/home/:page?' component={MainLayout} />
        </Switch>
      </Router>

    </HomePageContainer>
  )
}

export default HomePage;

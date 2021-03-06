import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage.component';
import NavBar from './Components/NavBar/NavBar.component';
import SideBar from './Components/SideBar/SideBar.component';
import SignUp from './Pages/SignUp/SignUp.Component.jsx'
import { GlobalStylings } from './GlobalStyles';
import AboutPage from './Pages/AboutPage/AboutPage.component';
import IntroPage from './Pages/IntroPage/IntroPage.component';
import SignIn from './Pages/SignInPage/SignIn.component';
import AgentsPage from './Pages/AgentsPage/AgentsPage.component'
import ShopsPage from './Pages/ShopsPage/ShopsPage.component';
import { auth, createUserProfileDocument } from './firebase';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/UserAuth/UserActions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './Redux/UserAuth/UserSelectors';


const App =  ({dispatchUser,currentUser}) => {

  const [isOpen , setIsOpen] = useState(false);

  useEffect (() => {
    const unSubscribeFromAuthStream = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {

       const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapshot => {
        dispatchUser({
          id : snapshot.id,
          ...snapshot.data()
        })
       })
      }else{
        dispatchUser(userAuth)
      }
    })
    return () => unSubscribeFromAuthStream();
  },[dispatchUser])

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <Router>
        <GlobalStylings/>
        <SideBar toggle={toggle} isOpen={isOpen}/>
        <NavBar toggle={toggle}/>
        <Switch>
          <Route exact path='/' component={IntroPage} />

          <Route  
          path='/signin' 
          render = {() => currentUser ? (<Redirect to='/home' />) : <SignIn/>}
          />
          <Route  path='/signup' component={SignUp} />

          <Route  path='/home' component={HomePage} />
          <Route  path='/about' component={AboutPage} />
          <Route  path='/agent' component={AgentsPage} />
          <Route path='/shops' component={ShopsPage}/>
        </Switch>
      </Router>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})


const mapDispatchToProps = dispatch => ({
  dispatchUser : user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App)

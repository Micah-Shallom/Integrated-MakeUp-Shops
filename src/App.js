import React, { useState } from 'react';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
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


const App = () => {

  const [isOpen , setIsOpen] = useState(false);

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
          <Route  path='/signin' component={SignIn} />
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
export default App;

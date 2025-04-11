import './App.css';
import Navbar from "./components/Navbar/Navbar"
import ProgressCircle from './components/ProgressCircle/ProgressCircle';
import Home from "./components/Home/Home"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Clubs from './components/Clubs/Clubs';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Classes from "./components/Classes_Page/Classes_Page"
import Strength from "./components/ExploreClasses/Strength/Strength"
import Aqua from "./components/ExploreClasses/Aqua/Aqua"
import Cardio from "./components/ExploreClasses/Cardio/Cardio"
import Cycling from "./components/ExploreClasses/Cycling/Cycling"
import Dance from "./components/ExploreClasses/Dance/Dance"
import Mind_Body from "./components/ExploreClasses/Mind&Body/Mind_Body"
import Membership_page from './components/Membership_page/Membership_page';
import React, { useState } from "react";
import  Login  from "./components/Login/LoginForm";
import  Register  from "./components/Register/RegisterForm";
import Schedule from "./components/Schedule/Schedule"
//import { Database } from './data/Database';
//import LoggedIn_App from "./components/Logged_In/LoggedIn_A"
import MyHome from "./components/Logged_In/myHome/myHome"
import Sports from "./components/Sports_Page/Sports"
import Exercise from "./components/ExerciseGuide/ExerciseGuide"
import Virtual from './components/ExploreClasses/Virtual/Virtual';
import Plank_Training1 from "./components/ExploreClasses/Virtual/Plank_Workout1/Plank_Training1";
import Plank_Training2 from "./components/ExploreClasses/Virtual/Plank_Workout1/Plank_Training2";
import Plank_Training3 from "./components/ExploreClasses/Virtual/Plank_Workout1/Plank_Training3";
import Checkout from './components/Checkout/Checkout';







function App() {
localStorage.setItem("status", false)
localStorage.setItem("email", "")
localStorage.setItem("name", "")
localStorage.setItem("ID", "")

  return (
    

    <Router basename="/premium_fitness">
    <div className="App">

    <ProgressCircle/>
    <Navbar/>
  
      <div className='content'>
            <Switch>

            <Route exact path = "/register">
              <Register/>
            </Route>

            <Route exact path = "/login">
              <Login/>
            </Route>

            <Route exact path = "/">
              <Redirect to="/home" />
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>
        

            <Route exact path = "/myHome">
              <MyHome/>

            </Route>


            <Route exact path = "/sports">
              <Sports/>
            </Route>

            <Route exact path = "/exercise">
              <Exercise/>
            </Route>

            

            <Route exact path = "/schedule">
              <Schedule/>

            </Route>

          

            <Route exact path = "/clubs">
              <Clubs/>
            </Route>


            <Route exact path = "/classes">
              <Classes/>
            </Route>

            <Route exact path = "/classes/aqua">
              <Aqua/>
            </Route>

            <Route exact path = "/classes/cardio">
              <Cardio/>
            </Route>

            <Route exact path = "/classes/cycling">
              <Cycling/>
            </Route>

            <Route exact path = "/classes/dance">
              <Dance/>
            </Route>

            <Route exact path = "/classes/mind_body">
              <Mind_Body/>
            </Route>

            <Route exact path = "/classes/strength">
              <Strength/>
            </Route>

            <Route exact path = "/classes/virtual">
              <Virtual/>
            </Route>

            <Route exact path = "/classes/virtual/Plank_Training1">
              <Plank_Training1/>
            </Route>

            <Route exact path = "/classes/virtual/Plank_Training2">
              <Plank_Training2/>
            </Route>

            <Route exact path = "/classes/virtual/Plank_Training3">
              <Plank_Training3/>
            </Route>

            <Route exact path = "/membership">
              <Membership_page/>
            </Route>

            <Route exact path = "/checkout">
              <Checkout/>
            </Route>

            

          </Switch>
      </div>
      
    </div>
  </Router>


    


    
  );
}

export default App;
 

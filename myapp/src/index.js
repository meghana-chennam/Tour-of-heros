import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dashboard from './Dashboard'
import { BrowserRouter as Router } from 'react-router-dom';
import {  Switch, Route } from "react-router-dom";
import routerhead from './routerhead';
import Modaltest from './Modaltest';
import Signup from './Signup';
ReactDOM.render(
  
  <Router>
     
        <div className="App">
          <Switch>
          <Route path="/Heros"  component={routerhead}/>
        {/* <Route path="/" exact component={App}/> */}
         {/* <Route path="/Heroupdate"  component={Heroupdate}/>  */}
         <Route path="/" exact component={App}/>
         <Route path="/dashboard" component={Dashboard}/>
        <Route path="/Modaltest"  component={Modaltest}/>
        <Route path="/signup" component={Signup}/>
        </Switch>
        
        </div>
   </Router> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


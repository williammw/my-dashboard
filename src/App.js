import React from 'react';

import {  HashRouter as Router, Switch, Route, Link, useRouteMatch, useParam } from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import { useDispatch, useSelector } from 'react-redux';
import { selectPath, updateCurrentPath } from './features/routeSlice'
import AboutMe from './AboutMe';


function App() {

  const currPath = useSelector(selectPath);
  const dispatch = useDispatch();

  return (    
    <Router>
      <div className="App">

      <Home />

        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul> */}

        <Switch>
          <Route path="/About Me">
            {/* <About /> */}
            <AboutMe/>
          </Route>
          <Route path="/Projects">
            {/* <Topics /> */}
            Projects
          </Route>
          <Route path="/Researchs">
            {/* <Topics /> */}
            Researchs
          </Route>
          <Route path="/Courses">
            {/* <Topics /> */}
            Courses
          </Route>
          <Route path="/Q&A">
            {/* <Topics /> */}
            Q&A
          </Route>
          <Route path="/Contact">
            {/* <Topics /> */}
            Contact
          </Route>
          <Route path="/">           
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;




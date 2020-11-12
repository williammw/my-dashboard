import React from 'react';

import {  HashRouter as Router, Switch, Route, Link, useRouteMatch, useParam } from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import { useDispatch, useSelector } from 'react-redux';
import { selectPath, updateCurrentPath } from './features/routeSlice'


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
          <Route path="/Inbox">
            {/* <About /> */}
            INBOX
          </Route>
          <Route path="/Starred">
            {/* <Topics /> */}
            Starred
          </Route>
          <Route path="/Send email">
            {/* <Topics /> */}
            Send email
          </Route>
          <Route path="/Drafts">
            {/* <Topics /> */}
            Send Draft
          </Route>
          <Route path="/">           
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;




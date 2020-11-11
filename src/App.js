import React from 'react';
import {Counter } from './features/counter/Counter';
import {  HashRouter as Router, Switch, Route, Link, useRouteMatch, useParam } from "react-router-dom";




import './App.css';

import Home from './Home';
import About from './About';
import Topics from './Topics';



function App() {
  return (    
    <Router>
      <div>

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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
           
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;




import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Resume from './pages/Resume';

const App = () => ( 

  <Router>
    <Routes>

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/resume">
        <Resume />
      </Route>

    </Routes>
  </Router>
 
)

export default App;


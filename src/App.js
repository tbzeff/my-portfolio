import React from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Resume from './pages/Resume';

const App = () => ( 

  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  </Router>
 
)

export default App;


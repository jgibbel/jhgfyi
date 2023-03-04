import React, { Component } from 'react';
import './index.css';


import Header from './components/Header'
import About from './components/About'
import CurrentMood from './components/CurrentMood';
import RecentWork from './components/RecentWork';
import WebDev from './components/WebDev';
import WorkWithMe from './components/WorkWithMe';
import Interests from './components/Interests';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link
} from "react-router-dom";




class App extends Component {


  render() {
  return (
    <Router>
    
    <Routes>
        <Route exact path="/" element={<div className='blkBackgroundScreen'><Header /><About /><CurrentMood /><RecentWork /><WebDev /><WorkWithMe /><Footer /></div>} />
       
       
        {/* <Route exact path="/about">
          <HeaderWhite />
          <Home />
        </Route> */}
       
    </Routes>  

    

    </Router>
  );
}
}

export default App;

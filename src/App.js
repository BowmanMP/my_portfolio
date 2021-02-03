import React from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About_Me/About.js';
import MyWork from './pages/MyWork/MyWork';
import Contact from './pages/Contact/Contact.js';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <Router basename='/my_portfolio'>
        <Sidebar />
        <Switch>
          <Route path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/myWork' component={MyWork}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;

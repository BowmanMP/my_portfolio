import React from 'react';
import './App.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About_Me/About.js';
import MyWork from './pages/MyWork/MyWork';
import Contact from './pages/Contact/Contact.js';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <Router basename='/'>
        <Sidebar />
        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/myWork' component={MyWork}/>
          <Route path='/' component={Home}/>
        </Switch>
        <Footer />
      </Router>
  )    
}

export default App;

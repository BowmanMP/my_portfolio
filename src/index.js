import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import {HashRouter} from 'react-router-dom';;


function renderApp(root) {
    ReactDOM.render(
      <HashRouter>
        <App />
      </HashRouter>,
      root
    );
  }
  
  renderApp(document.getElementById('root'));



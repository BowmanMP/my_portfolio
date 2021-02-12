import React from 'react';
import './Button.css';
import { HashRouter, Link} from 'react-router-dom';

function ContactButton() {

    function changeBackground(e) {
        e.target.style.background = '#045164ea';
        e.target.style.color='white';
    }

    function changeBack(e) {
        e.target.style.background = 'transparent';
        e.target.style.color='#08fdd8';
    }

  return (
    <div>
      <HashRouter basename="/my_portfolio" />  
      <Link to='/contact' className="contact-button" 
          onMouseOver={changeBackground}
          onMouseLeave={changeBack}>Contact me!</Link>
    </div>
  );
}

export default ContactButton;



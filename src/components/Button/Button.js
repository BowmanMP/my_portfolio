import React from 'react';
import './Button.css';

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
    <a className="contact-button" href="/contact"
      onMouseOver={changeBackground}
      onMouseLeave={changeBack}>Contact me!
    </a>
  );
}

export default ContactButton;



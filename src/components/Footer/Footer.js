import React from "react";
import './Footer.css';
import { Icon } from 'semantic-ui-react';
import RubberBand from 'react-reveal/RubberBand';



const Footer
 = () => {
    return (
        <div className="footer-container">
            <RubberBand >
            <div>
                <a href="https://github.com/BowmanMP" target="_blank" rel="noopener noreferrer" id="githubIcon"><Icon name='github' link size='big' color='teal'/></a>
                <a href="https://www.linkedin.com/in/matt-bowman-83a981b5/" target="_blank" rel="noopener noreferrer" id="linkedInIcon"><Icon name="linkedin" link size='big' color='blue'/></a>
                <a href="https://www.instagram.com/matt_bowman21/?hl=en" target="_blank" rel="noopener noreferrer" id="youTubeIcon"><Icon name="instagram" link size="big" color='pink'/></a>
            </div>
            </RubberBand>
        </div>
    )
}

export default Footer

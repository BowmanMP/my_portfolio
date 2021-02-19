import React from 'react';
import './HangryProject.css';
import { Icon } from 'semantic-ui-react'
import photo from '../../images/Hangry_Screenshot.png';


function HangryProject() {
    return (
        <div className="projectContainer">
            <h1 className='title'>Hangry</h1>
            <div className="projectContainerFlexbox">
                <div className="projectImageContainer">
                    <img src={photo} className="image" alt="Hangry App Homepage"></img>
                </div>
                <div className="projectDescriptionContainer">
                    <h2 className="projectContainerHeader">Description</h2>
                    <p className="projectContainerDescription">A web application (mobile-friendly) that allows users to search for the best restaurants in any city in the US by leveraging the Yelp API. 
                    </p>
                    <h2 className='projectAccess'>Check it Out</h2>
                    <div className='accessContainer'>
                        <p>
                            <a href='https://bowmanmp.github.io/Hangry/' target='_blank' rel="noopener noreferrer" ><Icon name="computer" link size='large' /> Web App</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="Tecnologies container">
                <h2 className='projectContainerHeader'>Technologies</h2>
                <ul className='technologiesList'>
                    <li>
                        <Icon name="js" link size='large' color='yellow' />JavaScript
                    </li>
                    <li>
                        <Icon name="react" link size='large' color='blue' /> React
                    </li>
                    <li>
                        <Icon name="html5" link size='large' color='orange' />HTML/CSS
                    </li>
                </ul>
            </div>
            <hr ></hr>
        </div>
    )
};

export default HangryProject

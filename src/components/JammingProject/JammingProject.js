import React from 'react';
import './JammingProject.css';
import { Icon } from 'semantic-ui-react'
import photo from './JammingProject.png';

function JammingProject() {
    return (
        <div className="projectContainer">
            <h1 className='title'>Jammming</h1>
            <div className="projectContainerFlexbox">
                <div className="projectImageContainer">
                    <img src={photo} className="image" alt="Hangry App Homepage"></img>
                </div>
                <div className="projectDescriptionContainer">
                    <h2 className="projectContainerHeader">Description</h2>
                    <p className="projectContainerDescription">A web application (mobile-friendly) that utilizes the Spotify API to search for tracks and save them to a new playlist.
                    </p>
                    <h2 className='projectAccess'>Check it Out</h2>
                    <div className='accessContainer'>
                        <p>
                            <a href='https://matty-b-song.surge.sh' target='_blank' rel="noopener noreferrer" ><Icon name="computer" link size='large' /> Web App</a>
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
}

export default JammingProject

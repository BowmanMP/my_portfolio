import React from 'react';
import './LiteraryProject.css';
import { Icon } from 'semantic-ui-react'
import photo from '../../images/LiteraryProject.png';


function LiteraryProject() {
    return (
        <div className="projectContainer">
            <h1 className='title'>Literary</h1>
            <div className="projectContainerFlexbox">
                <div className="projectImageContainer">
                    <img src={photo} className="image" alt="Literary App Homepage"></img>
                </div>
                <div className="projectDescriptionContainer">
                    <h2 className="projectContainerHeader">Description</h2>
                    <p className="projectContainerDescription">A web application that allows users to gather stats and search through text of popular novels.
                    </p>
                    <h2 className='projectAccess'>Check it Out</h2>
                    <div className='accessContainer'>
                        <p>
                            <a href='http://literary-review.surge.sh/#' target='_blank' rel="noopener noreferrer" ><Icon name="computer" link size='large' /> Web App</a>
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
                        <Icon name="html5" link size='large' color='orange' />HTML
                    </li>
                    <li>
                        <Icon name="css3 alternateç" link size='large' color='blue' /> CSS3
                    </li>
                </ul>
            </div>
            <hr ></hr>
        </div>
    )
};

export default LiteraryProject

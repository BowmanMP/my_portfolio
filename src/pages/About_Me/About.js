import React from 'react';
import './About.css';
import picture from '../About_Me/climing.jpg';
import Bounce from 'react-reveal/Bounce';

function About() {
    return (
        <div className="about-page">
            <div className='columns'>
                <div className="column-left">
                    <Bounce left>
                        <h1><a href="#." className="effect-shine">About Me</a></h1>
                        <p >Full-Stack Developer with a passion for building compelling interactive web & mobile applications to build enterprise value in a multitude of business domains. 
                        </p>
                        <p>Experience working with high-growth technology companies in NYC & SF has enabled a unique combination of technical and business skills.</p>
                        <p>Well-organised person, problem solver, team player, naturally curious with high attention to detail. Fan of outdoor activities, rock climbing, triathlons and reading. A family person, husband, and father to a rambunctious dog. Remote employment is preferred.
                        </p>
                        <p>Interested in full-stack develpment, working on ambitious projects with positive people. Remote employment is preferred.</p>
                    </Bounce>
                </div>
                <div className="column-right">
                    <Bounce right>
                        <img className="climbing" src={picture} alt='about me'></img>
                    </Bounce>
                </div>
            </div>
        </div>
    )
}

export default About
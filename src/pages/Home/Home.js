import React from 'react'
import ContactButton from '../../components/Button/Button';
import ParticlesContainer from '../../components/ParticlesContainer';
import './Home.css';
import Flip from 'react-reveal/Flip';


function Home() {
    return (
        <div className='home-page'>
            <Flip>
                <div className="text-zone">
                    <h1 className='intro'><a href="#." className="effect-shine">Hi, I'm Matt.</a><br></br></h1>
                    <h2 className="role-description">Full Stack Software Developer</h2>
                    <ContactButton rel="contact" >
                        Contact me!
                    </ContactButton>
                </div>
            </Flip>
        
            <div className='particles-zone-container'>
                <ParticlesContainer />
            </div>
        </div>
    )
}

export default Home

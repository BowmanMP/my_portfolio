import React from 'react';
import './Contact.css';
import Tada from 'react-reveal/Tada';
import ContactForm from '../../components/ContactForm/ContactForm';
import ParticlesContainer from '../../components/ParticlesContainer';


function Contact() {
    return (
        <div className="contactScreen">
            <div className='contact-form-container'>
                <div className='contact-form-container-particles'>
                    <ParticlesContainer />
                </div>
                <div className='contact-form-container-info'>
                    <Tada>
                        <ContactForm />
                    </Tada>
                </div>
            </div>
        </div>
    )
}

export default Contact

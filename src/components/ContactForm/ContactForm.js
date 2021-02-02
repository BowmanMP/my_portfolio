import React from 'react';
import './ContactForm.css';
import emailjs from 'emailjs-com';
import swal from 'sweetalert2';
import { Form, Input, TextArea, Button, } from 'semantic-ui-react';

function ContactForm() {
    
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;


    const handleFormSubmit = e => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                swal.fire(
                    'Message Sent! Matt will get back to you as soon as he can!',
                )
            }, (error) => {
                console.log(error.text);
                swal.fire(
                    'Message Error',
                    error.text,
                    'error'
                )
            });
        e.target.reset()    
    }

    return (
        <div className='contact-form-card'>
            <Form onSubmit={handleFormSubmit}>
                <Form.Field
                    id='form-input-control-email'
                    control={Input}
                    type='email'
                    label='Email'
                    name='user_email'
                    placeholder='Type your email here...'
                    required
                    // icon='mail'
                    // iconPosition="left"
                />
                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    label='Name'
                    name='user_name'
                    placeholder='Type your name here...'
                    required
                    // icon='user circle'
                    // iconPosition="left"

                />
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Message'
                    name='user_message'
                    placeholder='Type your message here...'
                    required
                />
                <Form.Field
                    id='form-button-control-public'
                    control={Button}
                    content='Send Message'
                    color='green'
                />
            </Form>
        </div>
    )
}

export default ContactForm
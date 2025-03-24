import React from 'react';
import './contact.css';

function Contact() {

    return (
        <section id='Contact' className='Contact'>
            <h1 className="Contactpagetitle">Contact</h1>
            <span className="contactdesc">Please fill out the form below to discuss any work opportunities.</span>

            <form  action="https://api.web3forms.com/submit" method="POST" className='contactform' >
            <input type="hidden" name="access_key" value="6943f459-d167-44b3-9f33-a196b332b464"></input>
                <input 
                className="name" 
                type="text" 
                placeholder='Name' 
                required
                name="name" 
                />
                <input 
                className="gmail" 
                type="text" 
                placeholder='Email' 
                required
                name="email" />
                <textarea 
                className="msg" 
                required
                name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                <button 
                className='submit' 
                required
                type="submit" 
                value="Send" >Submit</button>
            </form>
            
        </section>
    );
}

export default Contact;

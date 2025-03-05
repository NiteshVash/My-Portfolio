import React from 'react'
import './contact.css'

function Contact() {
    return (
        <section id='Contact' className='Contact'>
            <h1 className="Contactpagetitle">Contact</h1>
            <span className="contactdesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus asperiores consectetur similique minus perspiciatis repellat </span>
            <form action="" className='contactform'>
                <input className="name" type="text" placeholder='Name' />
                <input className="gmail" type="text" placeholder='Email' />
                <textarea className="msg" name="msg" id="" cols="30" rows="10" placeholder='Message'></textarea>
                <button className='submit' type='send' >Submit</button>
               
            </form>
        </section>
    )
}

export default Contact
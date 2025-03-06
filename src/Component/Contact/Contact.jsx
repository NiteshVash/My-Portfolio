import React  , {useRef} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_9od457l', 'template_5osw4im', form.current, {
                publicKey: '89b_F208I88tq0oAX1o-N',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <section id='Contact' className='Contact'>
            <h1 className="Contactpagetitle">Contact</h1>
            <span className="contactdesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus asperiores consectetur similique minus perspiciatis repellat </span>
            <form action="" className='contactform' ref={form} onSubmit={sendEmail}>
                <input className="name" type="text" placeholder='Name' name="user_name" />
                <input className="gmail" type="text" placeholder='Email' name="user_email" />
                <textarea className="msg" name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
                <button className='submit' type="submit" value="Send" >Submit</button>
            </form>
        </section>
    )
}

export default Contact
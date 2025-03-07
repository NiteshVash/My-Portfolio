import React from 'react';
import './Intro.css';
import hireme from '../../assests/Hireme.png';

function Intro() {
    return (
        <section>
            <div id="intro" className="intro">
                <span className='introtext'>Hello,</span>
                <span className='introtext1'>I'm <span className='introName'>Nitesh</span></span>
                <span className='introdisc'>Website Designer</span>
                <span className='introPara'>I am a skilled web designer creating user-friendly websites</span>
                <button className='introBtn'>
                    <img src={hireme} alt="Hire Me" className="introBtnimg" />
                    <div className="introBtntext">Hire Me</div>
                </button>
            </div>
        </section>
    );
}

export default Intro;
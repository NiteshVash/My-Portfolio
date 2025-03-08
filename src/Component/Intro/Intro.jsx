import React, { useState } from 'react';
import './Intro.css';
import ResumePic from '../../assests/ResumePic.png';
import Resume from '../../Component/Resume/Resume';

function Intro() {
    const [showResume, setShowResume] = useState(false);
   
    return (
        <section>
            <div id="intro" className="intro">
                <span className='introtext'>Hello,</span>
                <span className='introtext1'>I'm <span className='introName'>Nitesh</span></span>
                <span className='introdisc'>Website Designer</span>
                <span className='introPara'>I am a skilled web designer creating user-friendly websites</span>
                <button className='introBtn' onClick={() => setShowResume(true)}>
                    <img src={ResumePic} alt="Hire Me" className="introBtnimg" />
                    <div className="introBtntext">Resume</div>
                </button>
                {showResume && <Resume onClose={() => setShowResume(false)} />}
            </div>
        </section>
    );
}

export default Intro;
import React from 'react'
import './Languages.css'
import HTML from '../../assests/HTML.png'
import JS from '../../assests/JS.png'
import react from '../../assests/React.png'
import java from '../../assests/java.png'
import Css from "../../assests/Css.png";


function Languages() {
  return (
    <section id='Languagessection' className='Languagessection'>
      <div className="Languagescontainer">
        <h1 className='Languagesconatinerheading'>Languages</h1>
        <div className="languagesdiscription">I learn this languages from my institute and social media platform </div>
        <div className="languagecontainer2">
          <div className="languagename">
            <div className="languagenametitle">HTML</div>
            <img src={HTML} alt='logo' className='languagenameimg' />
          </div>
          <div className="languagename">
            <div className="languagenametitle">Java Script</div>
            <img src={JS} alt='logo' className='languagenameimg' />
          </div>
          <div className="languagename">
            <div className="languagenametitle">React</div>
            <img src={react} alt='logo' className='languagenameimg' />
          </div>
          <div className="languagename">
            <div className="languagenametitle">Java</div>
            <img src={java} alt='logo' className='languagenameimg' />
          </div>
          <div className="languagename">
            <div className="languagenametitle">CSS</div>
            <img src={Css} alt='logo' className='languagenameimg' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Languages
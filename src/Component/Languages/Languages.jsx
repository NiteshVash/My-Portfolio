import React, { useState } from 'react'
import './Languages.css'
import HTML from '../../assests/HTML.png'
import JS from '../../assests/JS.png'
import react from '../../assests/React.png'
import java from '../../assests/java.png'
import Css from "../../assests/Css.png";
import C from "../../assests/C.png";
import Cplus from "../../assests/Cplus.png";
import About_Html from '../Lang-About/Html/About_Html';
import About_Js from '../Lang-About/Js/ABout_Js';
import ReactInfo from '../Lang-About/React/ReactInfo';
import JavaInfo from '../Lang-About/java/JavaInfo';

function Languages() {
  const [showLangAbout, setShowLangAbout] = useState({ html: false, js: false, react: false ,java: false });

  return (
    <section id='Languagessection' className='Languagessection'>
      <div className="Languagescontainer">
        <h1 className='Languagesconatinerheading'>Languages</h1>
        <div className="languagesdiscription">I learn this languages from my institute and social media platform </div>
        <div className="languagecontainer2">
          <div className="languagename" onClick={() => setShowLangAbout({ html: true, js: false, react: false, java: false  })}>
            <div className="languagenametitle">HTML</div>
            <img src={HTML} alt='logo' className='languagenameimg' />
          </div>
          <div className="languagename" onClick={() => setShowLangAbout({ html: false, js: true, react: false , java: false })}>
            <div className="languagenametitle">Java Script</div>
            <img src={JS} alt='logo' className='languagenameimg' />
          </div>
          <div className="languagename" onClick={() => setShowLangAbout({ html: false, js: false, react: true , java: false })}>        
            <div className="languagenametitle">React</div>
            <img src={react} alt='logo' className='languagenameimg' />
          </div>
          <div className="languagename"  onClick={() => setShowLangAbout({ html: false, js: false, react: false, java: true })}>
            <div className="languagenametitle">Java</div>
            <img src={java} alt='logo' className='languagenameimg' />
          </div>
          <div className="languagename">
            <div className="languagenametitle">CSS</div>
            <img src={Css} alt='logo' className='languagenameimg' />
          </div>
          <div className="languagename">
            <div className="languagenametitle">C</div>
            <img src={C} alt='logo' className='languagenameimg' />
          </div>
          <div className="languagename">
            <div className="languagenametitle">C++</div>
            <img src={Cplus} alt='logo' className='languagenameimg' />
          </div>
        </div>
      </div>
      {showLangAbout.html && <About_Html onClose={() => setShowLangAbout({ html: false, js: false, react: false , java : false })} />}
      {showLangAbout.js && <About_Js onClose={() => setShowLangAbout({ html: false, js: false, react: false , java : false})} />}
      {showLangAbout.react && <ReactInfo onClose={() => setShowLangAbout({ html: false, js: false, react: false , java : false })} />}
      {showLangAbout.java && <JavaInfo onClose={() => setShowLangAbout({ html: false, js: false, react: false , java : false })} />}
    </section>
  )
}

export default Languages
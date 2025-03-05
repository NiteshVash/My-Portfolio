import React from 'react'
import './Intro.css'
import hireme from '../../assests/Hireme.png'

function Intro() {
    return (
        <>
            <section>
                <div id="intro" className="intro">
                    <span className='introtext'> Hello ,</span>
                    <span className='introtext1'> I'm <span className='introName'>Nitesh</span></span>
                    <span className='introdisc'>Website designer</span>
                    <span className='introPara'>I am skilled Web designer with creating user-friendly websites</span>
                    <button className='introBtn'>
                        <img src={hireme} alt="" className="introBtnimg" />
                        <div className="introBtntext">Hire Me </div>
                    </button>
                  
                </div>
            </section>
        </>
    )
}

export default Intro
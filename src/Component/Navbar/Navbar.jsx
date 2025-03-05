import React from 'react'
import Logo4 from '../../assests/Logo4.png'
import contact from '../../assests/contact.png'
import { Link } from 'react-scroll'

import './Navbar.css'

function Navbar() {
    return (
        <div className="Navbar">
            <img src={Logo4} alt="Logo" className='Logo' />
            <div className="DesktopMenu">
                <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-90} duration={500} className='DesktopMenuListItem'> Home </Link>
                <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-50} duration={500} className='DesktopMenuListItem'> About</Link>
                <Link activeClass="active" to='Languagessection' spy={true} smooth={true} offset={-50} duration={500} className='DesktopMenuListItem'> Languages </Link>
                <Link activeClass="active" to='Contact' spy={true} smooth={true} offset={-50} duration={500} className='DesktopMenuListItem'> Contact </Link>
            </div>
            <button className='desktopbtn' onClick={() => {
                document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' } )
            }}>

            <img src={contact} alt="" className='Desktopbtnimg' />Contact me </button>
        </div >
    )
}

export default Navbar
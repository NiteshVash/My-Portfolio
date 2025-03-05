import React from 'react'
import Logo4 from '../../assests/Logo4.png'
import contact from '../../assests/contact.png'


import './Navbar.css'

function Navbar() {
    return (
        <div className="Navbar">
            <img src={Logo4} alt="Logo" className='Logo' />
            <div className="DesktopMenu">
                <div  className="DesktopMenuListItem" onClick={()=>{
                     document.getElementById('intro').scrollIntoView({ behavior: 'smooth' } )
                }}>Home</div>
                <div className="DesktopMenuListItem" onClick={()=>{
                     document.getElementById('projects').scrollIntoView({ behavior: 'smooth' } )
                }}>About</div>
                <div className="DesktopMenuListItem" onClick={()=>{
                     document.getElementById('Languagessection').scrollIntoView({ behavior: 'smooth' } )
                }}>Language</div>
                <div className="DesktopMenuListItem" onClick={()=>{
                     document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' } )
                }}>Contact</div>
            </div>
            <button className='desktopbtn' onClick={() => {
                document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' } )
            }}>

            <img src={contact} alt="" className='Desktopbtnimg' />Contact me </button>
        </div >
    )
}

export default Navbar
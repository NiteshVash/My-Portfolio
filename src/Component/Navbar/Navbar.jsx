import React, { useState } from 'react';
import Logo4 from '../../assests/Logo4.png';
import contact from '../../assests/contact.png';
import Mobmenu from '../../assests/Mobmenu.png';
import './Navbar.css';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleScroll = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setShowMenu(false);
    };

    return (
        <nav className="Navbar">
            <a href="https://nitesh-kumar-ten.vercel.app/">
                <img src={Logo4} alt="Logo" className='Logo' />
            </a>
            
            <div className="DesktopMenu">
                <div className="DesktopMenuListItem" onClick={() => handleScroll('intro')}>Home</div>
                <div className="DesktopMenuListItem" onClick={() => handleScroll('projects')}>About</div>
                <div className="DesktopMenuListItem" onClick={() => handleScroll('Languagessection')}>Language</div>
                <div className="DesktopMenuListItem" onClick={() => handleScroll('Contact')}>Contact</div>
            </div>
            
            <button className='desktopbtn' onClick={() => handleScroll('Contact')}>
                <img src={contact} alt="" className='Desktopbtnimg' />Contact me
            </button>
            
            <img src={Mobmenu} alt="Menu" className='Mobmenuimg' onClick={() => setShowMenu(!showMenu)} />
            
            <div className={`MobMenu ${showMenu ? 'show' : ''}`}>
                <div className="MobMenuListItem" onClick={() => handleScroll('intro')}>Home</div>
                <div className="MobMenuListItem" onClick={() => handleScroll('projects')}>About</div>
                <div className="MobMenuListItem" onClick={() => handleScroll('Languagessection')}>Language</div>
                <div className="MobMenuListItem" onClick={() => handleScroll('Contact')}>Contact</div>
            </div>
        </nav>
    );
}

export default Navbar;
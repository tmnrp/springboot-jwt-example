import './Navbar.scss';
import React, { useState } from 'react';
import Hamburger from './hamburger/Hamburger';
import logo from '../../resources/images/primary-logo-red.png';

const Navbar = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [lastActiveMenu, setLastActiveMenu] = useState("menu-home");
    const onMenuClick = (event) => {
        document.getElementById(lastActiveMenu).classList.toggle("isactive");
        setLastActiveMenu(event.target.id);
        document.getElementById(event.target.id).classList.toggle("isactive");
    };
    return (
        <div id="navbar">
            <img className="logo" src={logo} alt="Mumbai Dev" />
            <div className="nav-items-container">
                <Hamburger onHamburgerClick={(isHamburgerActive) => setIsMenuActive(isHamburgerActive)} />
                <ul
                    id="menu"
                    className={isMenuActive ? "menu isactive" : "menu"}
                >
                    <li>
                        <button id="menu-home" className="menu-item isactive" onClick={onMenuClick}>Home</button>
                    </li>
                    <li>
                        <button id="menu-edu" className="menu-item" onClick={onMenuClick}>Education</button>
                    </li>
                    <li>
                        <button id="menu-exp" className="menu-item" onClick={onMenuClick}>Experience</button>
                    </li>
                    <li>
                        <button id="menu-contact" className="menu-item" onClick={onMenuClick}>Contact Us</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
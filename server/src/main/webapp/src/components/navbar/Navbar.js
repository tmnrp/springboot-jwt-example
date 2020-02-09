import './Navbar.scss';
import React, { useState } from 'react';
import logo from '../../resources/images/primary-logo-red.png';
import HamburgerMenu from '../hamburger-menu/HamburgerMenu';

const Navbar = () => {
    const [lastActiveMenu, setLastActiveMenu] = useState('menu-home');

    const setIsMenuActive = (event) => {
        const currentTargetId = event.target.id;
        removeIsMenuActive();
        addIsMenuActive(currentTargetId);
        setLastActiveMenu(currentTargetId);
    };

    const addIsMenuActive = (currentTargetId) => {
        document.getElementById(currentTargetId).setAttribute('class', `item isactive`);
    };

    const removeIsMenuActive = () => {
        document.getElementById(lastActiveMenu).setAttribute('class', 'item');
    };

    return (
        <div id="navbar">
            <div className="container">
                <img
                    className="logo"
                    src={logo}
                    alt="No img found"
                />
                <ul id="menu" className="menu">
                    <li className="items"><button onClick={setIsMenuActive} id="menu-home" className="item isactive">Home</button></li>
                    <li className="items"><button onClick={setIsMenuActive} id="menu-edu" className="item">Education</button></li>
                    <li className="items"><button onClick={setIsMenuActive} id="menu-exp" className="item">Experience</button></li>
                    <li className="items"><button onClick={setIsMenuActive} id="menu-projects" className="item">Projects</button></li>
                    <li className="items">
                        <HamburgerMenu />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
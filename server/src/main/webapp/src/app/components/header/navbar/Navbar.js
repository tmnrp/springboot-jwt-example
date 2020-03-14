import './Navbar.scss';
import React, { useState } from 'react';
import Hamburger from './hamburger/Hamburger';
const Navbar = () => {
    const [isMenuActive, setIsMenuActive] = useState(false);

    return (
        <nav id="tm-navbar">
            <div className="tm-hamburger-container">
                <Hamburger onHamburgerClick={(isHamburgerActive) => setIsMenuActive(isHamburgerActive)} />
            </div>
            <ul className={isMenuActive ? "tm-menu isactive" : "tm-menu"}>
                <li className="tm-menu-item">Home</li>
                <li className="tm-menu-item">About</li>
                <li className="tm-menu-item">Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
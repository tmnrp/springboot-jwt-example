import './Navbar.scss';
import React from 'react';

const Navbar = () => {
    return (
        <nav id="tm-navbar">
            <ul className="tm-menu">
                <li className="tm-menu-item">Home</li>
                <li className="tm-menu-item">About</li>
                <li className="tm-menu-item">Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
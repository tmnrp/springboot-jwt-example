import './Navbar.scss';
import React from 'react';
import logo from '../../resources/images/primary-logo-red.png';

const Navbar = () => {
    return (
        <div id="navbar">
            <div className="container">
                <img
                    className="logo"
                    src={logo}
                    alt="No img found"
                />
            </div>
        </div>
    );
};

export default Navbar;
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
                <ul className="menu">
                    <li className="items"><button className="item">Home</button></li>
                    <li className="items"><button className="item">Education</button></li>
                    <li className="items"><button className="item">Experience</button></li>
                    <li className="items"><button className="item">Projects</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
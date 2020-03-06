import './Navbar.scss';
import React, { useState } from 'react';
import { signOut } from '../utils/GoogleAuth';
import Hamburger from './hamburger/Hamburger';
import logo from '../../../../resources/images/primary-logo-red.png';

const Navbar = (props) => {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const [lastActiveMenu, setLastActiveMenu] = useState("menu-home");

    return (
        <nav id="navbar">
            <img className="logo" src={logo} alt="Mumbai Dev" />
            <div className="nav-items-container">
                <Hamburger onHamburgerClick={(isHamburgerActive) => setIsMenuActive(isHamburgerActive)} />
                <ul
                    id="menu"
                    className={isMenuActive ? "menu isactive" : "menu"}
                >
                    <li>
                        <button
                            id="menu-home"
                            className="menu-item type-red isactive"
                            onClick={(event) => onMenuClick(event, lastActiveMenu, setLastActiveMenu)}
                        >Home</button>
                    </li>
                    <li>
                        <button
                            id="menu-contact"
                            className="menu-item type-red"
                            onClick={(event) => onMenuClick(event, lastActiveMenu, setLastActiveMenu)}
                        >Contact Us</button>
                    </li>
                </ul>
            </div>
            <div className="nav-login-container">
                <div className="user-name">
                    {
                        (gapi.auth2 && gapi.auth2.getAuthInstance().isSignedIn.get())
                            ? gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile().getName()
                            : ""
                    }
                </div>
                <button
                    className="login-btn type-red"
                    onClick={(event) => onNavLogBtnClick(event, props)}
                >{props.isUserLoggedIn ? "LOG OUT" : "LOG IN"}</button>
            </div>
        </nav>
    );
};
const onMenuClick = (event) => {
    document.getElementById(lastActiveMenu).classList.toggle("isactive");
    setLastActiveMenu(event.target.id);
    document.getElementById(event.target.id).classList.toggle("isactive");
};

const onNavLogBtnClick = (event, props) => {
    if (event.target.innerText === "LOG IN") {
        props.setShowLoginPortal(true)
    } else {
        signOut(() => {
            props.setIsUserLoggedIn(false);
        });
    }
};

export default Navbar;
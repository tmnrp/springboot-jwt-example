import './HamburgerMenu.scss';
import React, { useState } from 'react';

const HamburgerMenu = () => {
    const [menuToggle, setMenuToggle] = useState(false);

    const doToggle = () => {
        setMenuToggle(menuToggle ? false : true);
    };
    return (
        <div id="hamburger-menu"
            className={menuToggle ? "hamburger-menu isactive" : "hamburger-menu"}
            onClick={doToggle}
        >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
        </div>
    );
};

export default HamburgerMenu;
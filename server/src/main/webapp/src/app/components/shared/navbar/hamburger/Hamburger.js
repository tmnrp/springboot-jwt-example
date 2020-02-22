import './Hamburger.scss';
import React, { useState } from 'react';

const Hamburger = (props) => {
    const onHamburgerClick = () => {
        document.getElementById('hamburger-icon').classList.toggle('isactive');
        const isActive = (document.getElementById('hamburger-icon').className.indexOf('isactive') >= 0) ? true : false;
        props.onHamburgerClick(isActive);
    };

    return (
        <div
            id="hamburger-icon"
            className="hamburger-icon"
            onClick={() => onHamburgerClick()}
        >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
        </div>
    );
};

export default Hamburger;
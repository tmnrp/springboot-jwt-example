import './Logo.scss';
import React from 'react';
import logo from '../../../../resources/images/primary-logo-red.png';

const Logo = () => {
    return (
        <div id="tm-logo-container">
            <img src={logo} alt="Mumbai Dev" />
        </div>
    );
};

export default Logo;
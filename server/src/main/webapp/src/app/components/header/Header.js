import './Header.scss';
import React, { useEffect } from 'react';
import Logo from './logo/Logo';
import Navbar from './navbar/Navbar';
import LoginButton from './login-button/LoginButton';
import User from './user/User';

const Header = (props) => {
    return (
        <div id="tm-header">
            <Logo />
            <Navbar />
            {
                (props.authenticationService && props.authenticationService.isUserLoggedIn())
                    ? <User />
                    : <LoginButton />}
        </div>
    );
};

export default Header;
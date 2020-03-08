import './Header.scss';
import React, { useEffect } from 'react';
import Logo from './logo/Logo';
import Navbar from './navbar/Navbar';
import LoginButton from './login/buttons/login-button/LoginButton';
import User from './user/User';
import { connect } from 'react-redux';

const Header = (props) => {
    console.log("header -> ", props);

    return (
        <div id="tm-header">
            <Logo />
            <Navbar />
            {
                props.isUserLoggedIn ? <User /> : <LoginButton />
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isUserLoggedIn: state.isUserLoggedIn
    };
};
export default connect(mapStateToProps)(Header);
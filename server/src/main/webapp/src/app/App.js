import './App.scss';
import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { connect } from 'react-redux';
import { initGoogleAuth2, isUserLoggedIn } from './components/utils/authentication/AuthenticationService';
import { setWindowGApiReady, setUserLoggedIn } from './components/utils/authentication/actions';

const App = (props) => {
    const gapiAuthCallback = () => {
        props.setWindowGApiReady(true);
        console.log("Google Auth2 init complete");

        // Initial/Page-refresh user check
        props.setUserLoggedIn(isUserLoggedIn());
    };

    useEffect(() => {
        initGoogleAuth2(() => gapiAuthCallback());
    });

    return (
        <React.Fragment>
            <Header />
            <Footer />
        </React.Fragment>
    );
};

const mapActionToProps = () => {
    return {
        setWindowGApiReady: setWindowGApiReady,
        setUserLoggedIn: setUserLoggedIn
    };
};
export default connect(null, mapActionToProps())(App);
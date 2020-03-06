import './App.scss';
import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AuthenticationService from './components/utils/authentication/AuthenticationService';

let authenticationService;
const App = () => {
    authenticationService ? authenticationService : new AuthenticationService();

    return (
        <React.Fragment>
            <Header authenticationService={authenticationService} />
            <Footer />
        </React.Fragment>
    );
};

export default App;
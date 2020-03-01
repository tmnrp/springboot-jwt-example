import './App.scss';
import React, { useState, useEffect } from 'react';
import Navbar from './components/shared/navbar/Navbar';
import Login from './components/portals/login/Login';
import { googleAuthInit } from './components/shared/utils/GoogleAuth';

const App = () => {
    const [showLoginPortal, setShowLoginPortal] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    useEffect(() => googleAuthInit(setIsUserLoggedIn), []);

    return (
        <React.Fragment>
            <Navbar
                setShowLoginPortal={(showLogin) => setShowLoginPortal(showLogin)}
                isUserLoggedIn={isUserLoggedIn}
                setIsUserLoggedIn={setIsUserLoggedIn}
            />
            {
                showLoginPortal
                    ? <Login
                        setShowLoginPortal={(showLogin) => setShowLoginPortal(showLogin)}
                        isUserLoggedIn={isUserLoggedIn}
                        setIsUserLoggedIn={setIsUserLoggedIn}
                    />
                    : <React.Fragment />
            }
        </React.Fragment>
    );
};

export default App;
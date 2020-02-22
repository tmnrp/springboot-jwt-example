import './App.scss';
import React, { useState } from 'react';
import Navbar from './components/shared/navbar/Navbar';
import Login from './components/portals/login/Login';

const App = () => {

    const [showLoginPortal, setShowLoginPortal] = useState(false);

    return (
        <React.Fragment>
            <Navbar setShowLoginPortal={(showLogin) => setShowLoginPortal(showLogin)} />
            {
                showLoginPortal ?
                    <Login setShowLoginPortal={(showLogin) => setShowLoginPortal(showLogin)} /> :
                    <React.Fragment />
            }
        </React.Fragment>
    );
};

export default App;
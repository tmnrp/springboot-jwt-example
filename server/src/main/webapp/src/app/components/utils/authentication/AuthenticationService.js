import { useState } from 'react';

const AuthenticationService = () => {
    const userAuth = {
        isLoggedIn: false
    };
    const [userAuthDetails, setUserAuthDetails] = useState(userAuth);

    const getUserAuthDetails = () => {
        return userAuthDetails;
    };
    const isUserLoggedIn = () => {
        return userAuthDetails.isLoggedIn;
    };
    return {
        getUserAuthDetails: getUserAuthDetails,
        setUserAuthDetails: setUserAuthDetails,
        isUserLoggedIn: isUserLoggedIn
    };
};

export default AuthenticationService;
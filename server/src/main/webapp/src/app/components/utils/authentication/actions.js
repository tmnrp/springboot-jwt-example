// action creator.
export const setWindowGApiReady = (windowGApi) => {
    return {
        type: 'IS_WINDOW_GAPI_READY',
        payload: windowGApi
    };
};

export const setUserLoggedIn = (loggedIn) => {
    return {
        type: 'IS_USER_LOGGED_IN',
        payload: loggedIn
    };
};
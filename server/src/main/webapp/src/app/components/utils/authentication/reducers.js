export const windowGApiReducer = (windowGApi = false, action) => {
    if (action.type === 'IS_WINDOW_GAPI_READY') {
        return action.payload;
    }
    return windowGApi;
};

export const isUserLoggedInReducer = (loggedIn = false, action) => {
    if (action.type === 'IS_USER_LOGGED_IN') {
        return action.payload;
    }
    return loggedIn;
};
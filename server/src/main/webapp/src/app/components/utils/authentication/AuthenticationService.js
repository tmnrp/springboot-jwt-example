export const initGoogleAuth2 = (callback) => {
    gapi.load('auth2', () => {
        gapi.auth2.init().then(() => {
            window.gapi = gapi.auth2.getAuthInstance();
            callback(true);
        });
    });
};

export const doGoogleSignIn = (callback) => {
    window.gapi.signIn().then(
        // success
        (googleUser) => callback(googleUser),

        // failure
        (error) => {
            // notify user
            console.log('failed', error);
        }
    );
};

export const isUserLoggedIn = () => {
    return window.gapi.isSignedIn.get();
};

export const getUserName = () => {
    return window.gapi.currentUser.get().getBasicProfile().getName();
};
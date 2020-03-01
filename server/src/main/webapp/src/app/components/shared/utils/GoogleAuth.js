export const googleAuthInit = (setIsUserLoggedIn) => {
    setTimeout(() => {
        gapi.load('auth2', () => {
            gapi.auth2.init().then((params) => {
                setIsUserLoggedIn(params.isSignedIn.get());
            });
        });
    }, 1);
};

export const isSignedIn = () => {
    gapi.auth2.getAuthInstance().isSignedIn.get();
};

export const signOut = (callback) => {
    gapi.auth2.getAuthInstance().signOut()
        .then((params) => callback(params));
};

export const onSignIn = (event, callback) => {
    gapi.auth2.getAuthInstance().signIn().then(
        // success
        (googleUser) => callback(googleUser),

        // failure
        (error) => {
            // notify user
            console.log('failed', error);
        });
};

export const getUserName = () => {
    debugger;
};
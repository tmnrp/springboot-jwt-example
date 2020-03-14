// action creator.
export const showLoginModal = (loginModal) => {
    return {
        type: 'TOGGLE_LOGIN_MODAL',
        payload: loginModal
    };
};
export const loginModalReducer = (loginModal = false, action) => {
    if (action.type === 'TOGGLE_LOGIN_MODAL') {
        return action.payload;
    }
    return loginModal;
};
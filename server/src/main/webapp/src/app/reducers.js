import { combineReducers } from 'redux';
import { loginModalReducer } from './components/header/login/login-modal/reducers';
import { windowGApiReducer, isUserLoggedInReducer } from './components/utils/authentication/reducers';

export default combineReducers({
    loginModal: loginModalReducer,
    windowGApi: windowGApiReducer,
    isUserLoggedIn: isUserLoggedInReducer
});
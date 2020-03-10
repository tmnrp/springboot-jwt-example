import './LogoutButton.scss';
import React from 'react';
import { connect } from 'react-redux';
import { setUserLoggedIn } from '../../../utils/authentication/actions';

const LogoutButton = (props) => {
    return (
        <button
            id="tm-logout-btn"
            className="tm-btn tm-btn-secondary"
            onClick={(event) => onLogoutBtnClick(event, props.setUserLoggedIn)}
        >
            Logout
        </button>
    );
};

const onLogoutBtnClick = (event, setUserLoggedIn) => {
    const callback = () => {
        setUserLoggedIn(false);
    };
    window.gapi.signOut().then(callback);
};

const mapActionsToProps = () => {
    return {
        setUserLoggedIn: setUserLoggedIn
    };
};

export default connect(null, mapActionsToProps())(LogoutButton);
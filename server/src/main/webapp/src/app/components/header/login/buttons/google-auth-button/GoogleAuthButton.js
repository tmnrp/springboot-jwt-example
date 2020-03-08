import './GoogleAuthButton.scss';
import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { doGoogleSignIn } from '../../../../utils/authentication/AuthenticationService';
import { setUserLoggedIn } from '../../../../utils/authentication/actions';
import { showLoginModal } from '../login-button/actions';

const GoogleAuthButton = (props) => {
    return (
        <button
            id="tm-GoogleAuthButton"
            onClick={
                props.windowGApi
                    ? () => doGoogleSignIn(() => {
                        props.showLoginModal(false);
                        props.setUserLoggedIn(true);
                    }) : false
            }
        >
            <div>
                <FontAwesomeIcon icon={faGoogle} />
                <span>Log in with Google</span>
            </div>
        </button>
    );
};

const mapStateToProps = (state) => {
    return {
        windowGApi: state.windowGApi
    };
};
const mapActionsTpProps = () => {
    return {
        showLoginModal: showLoginModal,
        setUserLoggedIn: setUserLoggedIn
    };
};
export default connect(mapStateToProps, mapActionsTpProps())(GoogleAuthButton);
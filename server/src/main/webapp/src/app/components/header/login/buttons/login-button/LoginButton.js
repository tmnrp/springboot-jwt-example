import './LoginButton.scss';
import React from 'react';
import { connect } from 'react-redux';
import { showLoginModal } from './actions';
import LoginModal from '../../login-modal/LoginModal';

const LoginButton = (props) => {
    return (
        <div>
            <button
                id="tm-login-btn"
                className="tm-btn"
                onClick={() => props.showLoginModal(true)}
            >Log in</button>
            {
                props.loginModal
                    ? <LoginModal />
                    : false
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loginModal: state.loginModal
    };
};

const mapActionToProps = () => {
    return {
        showLoginModal: showLoginModal
    }
};
export default connect(mapStateToProps, mapActionToProps())(LoginButton);
import './LoginModal.scss';
import React from 'react';
import BasicPortal from '../../../basic-portal/BasicPortal';
import SignInPage from '../signin-page/SignInPage';
import SignUpPage from '../signup-page/SignUpPage';

const LoginModal = (props) => {
    return (
        <BasicPortal >
            <div id="tm-LoginModal">
                <SignInPage />
                <SignUpPage />
            </div>
        </BasicPortal>
    );
};

export default LoginModal;
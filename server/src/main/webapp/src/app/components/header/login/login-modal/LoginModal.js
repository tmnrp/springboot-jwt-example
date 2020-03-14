import './LoginModal.scss';
import React, { useState } from 'react';
import BasicPortal from '../../../basic-portal/BasicPortal';
import ForgotPassword from '../forgot-password/ForgotPassword';
import SignInPage from '../signin-page/SignInPage';
import SignUpPage from '../signup-page/SignUpPage';

const LoginModal = (props) => {
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    return (
        <BasicPortal >
            <div id="tm-modal" className="tm-modal-login">
                {
                    showForgotPassword
                        ? <ForgotPassword
                            setShowForgotPassword={(show) => setShowForgotPassword(show)}
                        />
                        : <>
                            <SignInPage
                                setShowForgotPassword={(show) => setShowForgotPassword(show)}
                            />
                            <SignUpPage />
                        </>
                }
            </div>
        </BasicPortal>
    );
};

export default LoginModal;
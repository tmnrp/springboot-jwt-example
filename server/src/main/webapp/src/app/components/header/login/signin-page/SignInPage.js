import './SignInPage.scss';
import React from 'react';
import GoogleAuthButton from '../../buttons/google-auth-button/GoogleAuthButton';
import OrSeperator from '../../../utils/or-seperator/OrSeperator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const SignInPage = (props) => {
    return (
        <div id="tm-SignInPage">
            <span className="tm-title-text">HI, THERE</span>
            <span className="tm-title-subtext">You can log in to your Mumbai Dev's account here.</span>
            <GoogleAuthButton />
            <OrSeperator />
            <form className="tm-signinpage-form">
                <div className="tm-input-field-wrap">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input
                        className="tm-input-field"
                        type="text"
                        placeholder="E-mail address"
                    />
                </div>
                <div className="tm-input-field-wrap">
                    <FontAwesomeIcon icon={faLock} />
                    <input
                        className="tm-input-field"
                        type="password"
                        placeholder="Password"
                    />
                </div>

                <button className="tm-btn tm-btn-secondary-light">Log In</button>

                <span className="tm-btn-seperator"><hr/></span>
                <span
                    className="tm-title-subtext tm-forgot-password"
                    onClick={() => props.setShowForgotPassword(true)}
                >
                    Forgot Password?
                </span>
            </form>
        </div>
    );
};

export default SignInPage;
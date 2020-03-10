import './SignInPage.scss';
import React from 'react';
import GoogleAuthButton from '../../buttons/google-auth-button/GoogleAuthButton';
import OrSeperator from '../../../utils/or-seperator/OrSeperator';

const SignInPage = (props) => {
    return (
        <div id="tm-SignInPage">
            <span className="tm-title-text">HI, THERE</span>
            <span className="tm-title-subtext">You can log in to your Mumbai Dev's account here.</span>
            <GoogleAuthButton />
            <OrSeperator />
            <form className="tm-signinpage-form">
                <input
                    className="tm-input-field"
                    type="text"
                    placeholder="E-mail address"
                />
                <input
                    className="tm-input-field"
                    type="password"
                    placeholder="Password"
                />
                <span className="tm-title-subtext">Forgot Password?</span>
                <button className="tm-btn">Login</button>
            </form>
        </div>
    );
};

export default SignInPage;
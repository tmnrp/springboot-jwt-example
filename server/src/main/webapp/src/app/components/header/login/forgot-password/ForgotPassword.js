import './ForgotPassword.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const ForgotPassword = (props) => {
    return (
        <div id="tm-ForgotPassword">
            <span className="tm-title-text tm-title-text-wrap">Forgotten password?</span>
            <div className="tm-input-field-wrap">
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                    className="tm-input-field"
                    type="text"
                    placeholder="E-mail address"
                />
            </div>
            <button className="tm-btn tm-btn-secondary-light">Log In</button>
            <hr />
            <span>
                <span
                    className="tm-title-subtext"
                    onClick={() => props.setShowForgotPassword(false)}
                >
                    Back to Login
                </span>
            </span>
        </div>
    );
};

export default ForgotPassword;
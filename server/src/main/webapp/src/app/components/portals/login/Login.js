import './Login.scss';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { onSignIn } from '../../shared/utils/GoogleAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = (props) => {
    const [showLoginView, setShowLoginView] = useState(true);
    return ReactDOM.createPortal(
        <section className="modal-overlay">
            <div className="modal-close" onClick={() => props.setShowLoginPortal(false)}>&#10006;</div>
            <div className="modal-content">
                {
                    showLoginView ? getSignInView(setShowLoginView, props) : getSignUpView(setShowLoginView, props)
                }
            </div>
        </section>, document.getElementById('portal-root')
    );
};

const signInCallback = (googleUser, props) => {
    props.setIsUserLoggedIn(googleUser.isSignedIn());
    props.setShowLoginPortal(false);
};

const getSignInView = (setShowLoginView, props) => {
    return (
        <React.Fragment>
            <div className="login-main-wrap pd-5">
                <div className="header-text color-dark-green">HI, THERE</div>
                <div className="sub-text">You can log in to your Mumbai Dev's account here.</div>

                <div className="pd-10"></div>
                <button
                    className="type-google-login"
                    onClick={(event) => onSignIn(event, (googleUser) => signInCallback(googleUser, props))}>
                    <FontAwesomeIcon icon={faGoogle} />
                    <span>
                        Log in with Google
                    </span>
                </button>

                <div className="ui-divider">
                    <hr />
                    <div>OR</div>
                    <hr />
                </div>

                <form className="manual-login-container">
                    <div className="input-text-container">
                        <input type="text" id="email-textfield" className="input-text" placeholder="E-mail address" />
                    </div>
                    <div className="input-text-container">
                        <input type="text" id="pwd-textfield" className="input-text" placeholder="Password" />
                    </div>
                    <div className="sub-text">Forgot Password?</div>
                    <div>
                        <button className="type-dark-green" onClick={(e) => { e.preventDefault() }} >Log in</button>
                    </div>
                </form>
            </div>

            <div className="login-sub-wrap pd-5">
                <div className="header-text color-light-grey">NEW HERE?</div>
                <div className="sub-text color-light-grey">Sign up and create your website.</div>
                <button className="type-thin-border" onClick={() => setShowLoginView(false)}>Sign Up</button>
            </div>
        </React.Fragment>
    );
};

const getSignUpView = (setShowLoginView, props) => {
    return (
        <React.Fragment>
            <div className="login-sub-wrap pd-5">
                <div className="header-text color-light-grey">ALREADY HAVE AN ACCOUNT?</div>
                <div className="sub-text color-light-grey">Log in and go to your Dashboard.</div>
                <button className="type-thin-border" onClick={() => setShowLoginView(true)}>Log in</button>
            </div>
            <div className="login-main-wrap pd-5">
                <div className="header-text color-dark-green">SIGN UP</div>
                <div className="sub-text">We're happy you're here!</div>
                <div className="ui-divider">
                    <hr />
                    <div>OR</div>
                    <hr />
                </div>
                <form className="manual-login-container">
                    <div className="input-text-container">
                        <input type="text" id="email-textfield" className="input-text" placeholder="E-mail address" />
                    </div>
                    <div className="input-text-container">
                        <input type="text" id="pwd-textfield" className="input-text" placeholder="Password" />
                    </div>
                    <div className="sub-text">Forgot Password?</div>
                    <div>
                        <button className="type-dark-green" onClick={(e) => { e.preventDefault() }} >Sign up</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Login;
import './Login.scss';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const getSignInView = (setShowLoginView) => {
    return (
        <React.Fragment>
            <div className="login-main-wrap pd-5">
                <div className="header-text color-dark-green">HI, THERE</div>
                <div className="sub-text">You can log in to your Mumbai Dev's account here.</div>

                <div className="pd-10"></div>
                <button className="type-google-login">
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

const getSignUpView = (setShowLoginView) => {

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

const Login = (props) => {
    const [showLoginView, setShowLoginView] = useState(true);
    return ReactDOM.createPortal(
        <section className="modal-overlay">
            <div className="modal-close" onClick={() => props.setShowLoginPortal(false)}>&#10006;</div>
            <div className="modal-content">
                {
                    showLoginView ? getSignInView(setShowLoginView) : getSignUpView(setShowLoginView)
                }
            </div>
        </section>, document.getElementById('portal-root')
    );
};

export default Login;
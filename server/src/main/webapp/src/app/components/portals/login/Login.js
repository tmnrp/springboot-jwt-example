import './Login.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const Login = (props) => {
    return ReactDOM.createPortal(
        <section className="modal-overlay">
            <div className="modal-close" onClick={() => props.setShowLoginPortal(false)}>&#10006;</div>
            <div className="modal-content">
                <div className="login-main-wrap pd-5">
                    <div className="header-text color-dark-green">HI, THERE</div>
                    <div className="sub-text">You can log in to your Mumbai Dev's account here.</div>
                </div>
                <div className="login-sub-wrap pd-5">
                    <div className="header-text color-light-grey">NEW HERE?</div>
                    <div className="sub-text color-light-grey">Sign up and create your website.</div>
                    <button className="type-thin-border">Sign Up</button>
                </div>
            </div>
        </section>, document.getElementById('portal-root')
    );
};

export default Login;
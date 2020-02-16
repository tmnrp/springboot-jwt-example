import './Login.scss';
import React from 'react';
import ReactDOM from 'react-dom';

const Login = (props) => {
    return ReactDOM.createPortal(
        <section id="login-modal-overlay">
            <div className="login-modal-close-btn-wrap">
                <span class="login-modal-close-btn" onClick={() => props.setShowLoginPortal(false)}>&#10006;</span>
            </div>
            <div className="modal-overlay-content">
                <div className="login-container">
                    <div className="left-container">
                        <div>HI, THERE</div>
                        <div>You can log in to your Mumbai Dev's account here.</div>
                    </div>
                    <div className="right-container">
                        <div>New Here ?</div>
                        <div>Sign up and create your portfolio.</div>
                        <button>Sign up now</button>
                    </div>
                </div>
            </div>
        </section>, document.getElementById('portal-root')
    );
};

export default Login;
import './BasicPortal.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { showLoginModal } from '../header/login/buttons/login-button/actions';
import { connect } from 'react-redux';

const BasicPortal = (props) => {
    return ReactDOM.createPortal(
        <section className="tm-modal-overlay">
            <span
                className="tm-modal-close-btn"
                onClick={() => props.showLoginModal(false)}
            >&#10006;</span>
            {props.children}
        </section>, document.getElementById('portal-root')
    );
};

const mapActionToProps = () => {
    return {
        showLoginModal: showLoginModal
    };
};
export default connect(null, mapActionToProps())(BasicPortal);
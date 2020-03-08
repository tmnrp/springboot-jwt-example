import './User.scss';
import React from 'react';
import { connect } from 'react-redux';
import { getUserName } from '../../utils/authentication/AuthenticationService';

const User = (props) => {
    return (
        <div id="tm-user">
            {
                props.isUserLoggedIn ? getUserName() : false
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isUserLoggedIn: state.isUserLoggedIn
    };
};
export default connect(mapStateToProps)(User);
import './User.scss';
import React from 'react';
import { connect } from 'react-redux';
import { getUserName } from '../../utils/authentication/AuthenticationService';
import UserDetails from './user-details/UserDetails';

const User = () => {
    const profile = window.gapi.currentUser.get().getBasicProfile();

    return (
        <div id="tm-user">
            <img
                src={profile.getImageUrl()}
                alt="profile pic"
                style={{
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px'
                }}
            />
            <UserDetails profile={profile} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isUserLoggedIn: state.isUserLoggedIn
    };
};
export default connect(mapStateToProps)(User);
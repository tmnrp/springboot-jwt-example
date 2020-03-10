import './UserDetails.scss';
import React from 'react';
import { connect } from 'react-redux';
import LogoutButton from '../../buttons/logout-button/LogoutButton';

const UserDetails = (props) => {
    return (
        <div className="tm-user-details-pop-up">
            <img
                src={props.profile.getImageUrl()}
                alt="profile pic"
                style={{
                    borderRadius: '50%',
                    width: '75px',
                    height: '75px',
                    margin: '10px'
                }}
            />
            <span className="tm-user-details-name">{props.profile.getName()}</span>
            <span className="tm-user-details-email">{props.profile.getEmail()}</span>
            <LogoutButton />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        isUserLoggedIn: state.isUserLoggedIn
    };
};
export default connect(mapStateToProps)(UserDetails);
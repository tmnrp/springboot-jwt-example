import "./GoogleAuthButton.scss";
import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { doGoogleSignIn } from "../../../utils/authentication/AuthenticationService";
import { setUserLoggedIn } from "../../../utils/authentication/actions";
import { showLoginModal } from "../login-button/actions";

const GoogleAuthButton = props => {
  return (
    <button
      id="tm-GoogleAuthButton"
      onClick={
        props.windowGApi
          ? () => doGoogleSignIn(() => googleSignInCallback(props))
          : false
      }
    >
      <div className="tm-GoogleAuthButton-container">
        <FontAwesomeIcon className="tm-google-icon" icon={faGoogle} />
        <span className="tm-login-btn-text-container">
          <span>Log in with Google</span>
        </span>
      </div>
    </button>
  );
};

const googleSignInCallback = props => {
  props.showLoginModal(false);
  props.setUserLoggedIn(true);
};

const mapStateToProps = state => {
  return {
    windowGApi: state.windowGApi
  };
};
const mapActionsTpProps = () => {
  return {
    showLoginModal: showLoginModal,
    setUserLoggedIn: setUserLoggedIn
  };
};
export default connect(mapStateToProps, mapActionsTpProps())(GoogleAuthButton);

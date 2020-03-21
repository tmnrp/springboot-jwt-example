import "./SignInPage.scss";
import React, { useState } from "react";
import { doSignIn } from "../../../utils/authentication/AuthenticationService";
import GoogleAuthButton from "../../buttons/google-auth-button/GoogleAuthButton";
import OrSeperator from "../../../utils/or-seperator/OrSeperator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const SignInPage = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="tm-SignInPage">
      <span className="tm-title-text">HI, THERE</span>
      <span className="tm-title-subtext">
        You can log in to your Mumbai Dev's account here.
      </span>
      <GoogleAuthButton />
      <OrSeperator />
      <form className="tm-signinpage-form">
        <div className="tm-input-field-wrap">
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            className="tm-input-field"
            type="text"
            placeholder="E-mail address"
            value={email}
            onChange={event => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="tm-input-field-wrap">
          <FontAwesomeIcon icon={faLock} />
          <input
            className="tm-input-field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <button
          className="tm-btn tm-btn-secondary-light"
          onClick={event => onLoginClick(event, email, password)}
        >
          Log In
        </button>

        <span className="tm-btn-seperator">
          <hr />
        </span>
        <span
          className="tm-title-subtext tm-forgot-password"
          onClick={() => props.setShowForgotPassword(true)}
        >
          Forgot Password?
        </span>
      </form>
    </div>
  );
};

const onLoginClick = (event, email, password) => {
  event.preventDefault();
  doSignIn(email, password, successCallback, failureCallback);
};

const successCallback = response => {
  localStorage.setItem("userToken", response.data.jwt);
};

const failureCallback = error => {
  console.log(error);
};

export default SignInPage;

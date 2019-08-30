import React, { useState } from "react";

import { connect } from "react-redux";
import { googleSignIn, emailSignIn } from "../../redux/user/user.actions";

import FormInput from "./../form-input/form-input.component";
import Button from "./../button/button.component";

import "./sign-in.style.scss";

const SignIn = ({ emailSignIn, googleSignIn }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const { email, password } = userCredentials;

  const handleSubmit = async e => {
    e.preventDefault();

    emailSignIn(email, password);
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setCredentials({
      ...userCredentials,
      [name]: value
    });
  };

  return (
    <div className="sign-in">
      <h2 className="sign-in__title">I already have an account</h2>
      <span className="sign-in__subtitle">
        Sign in using email address and password
      </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          required="required"
          onChange={handleChange}
        />

        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          required="required"
          onChange={handleChange}
        />
        <div className="buttons">
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            extraClasses="button--google"
            onClick={googleSignIn}
          >
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignIn: () => dispatch(googleSignIn()),
  emailSignIn: (email, password) => dispatch(emailSignIn({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);

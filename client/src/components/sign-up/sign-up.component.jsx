import React, { useState } from "react";

import { connect } from "react-redux";
import { signUp } from "../../redux/user/user.actions";

import FormInput from "./../form-input/form-input.component";
import Button from "./../button/button.component";

import "./sign-up.style.scss";

const SignUp = ({ signUp }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = e => {
    const { value, name } = e.target;

    setCredentials({
      ...userCredentials,
      [name]: value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    signUp({ displayName, email, password });
  };

  return (
    <div className="sign-up">
      <h2 className="sign-up__title">I don't have an account</h2>
      <span className="sign-up__subtitle">
        Sign up with your email and password
      </span>
      <form className="sign-up__form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display name"
          required="required"
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required="required"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required="required"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm password"
          required="required"
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUp: userData => dispatch(signUp(userData))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);

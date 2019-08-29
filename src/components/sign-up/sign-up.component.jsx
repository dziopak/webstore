import React from "react";

import { connect } from "react-redux";
import { auth, createUserProfile } from "./../../firebase/firebase.utils";
import { signUp } from "../../redux/user/user.actions";

import FormInput from "./../form-input/form-input.component";
import Button from "./../button/button.component";

import "./sign-up.style.scss";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { signUp } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    signUp({ displayName, email, password });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="sign-up__title">I don't have an account</h2>
        <span className="sign-up__subtitle">
          Sign up with your email and password
        </span>
        <form className="sign-up__form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display name"
            required="required"
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required="required"
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required="required"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm password"
            required="required"
          />
          <Button type="submit">Sign up</Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUp: userData => dispatch(signUp(userData))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);

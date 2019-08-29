import React from "react";

import { connect } from "react-redux";
import { googleSignIn, emailSignIn } from "../../redux/user/user.actions";

import FormInput from "./../form-input/form-input.component";
import Button from "./../button/button.component";

import "./sign-in.style.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.hangleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { emailSignIn } = this.props;

    await emailSignIn(email, password);
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    const { googleSignIn } = this.props;
    return (
      <div className="sign-in">
        <h2 className="sign-in__title">I already have an account</h2>
        <span className="sign-in__subtitle">
          Sign in using email address and password
        </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            required="required"
            onChange={this.hangleChange}
          />

          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            required="required"
            onChange={this.hangleChange}
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
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignIn: () => dispatch(googleSignIn()),
  emailSignIn: (email, password) => dispatch(emailSignIn({ email, password }))
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);

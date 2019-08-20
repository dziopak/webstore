import React from "react";
import "./sign-in.style.scss";
import FormInput from "./../form-input/form-input.component";
import Button from "./../button/button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

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
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err);
    }

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
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
            <Button extraClasses="button--google" onClick={signInWithGoogle}>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

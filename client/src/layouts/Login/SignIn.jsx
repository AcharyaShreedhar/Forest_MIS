import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Input } from "../../components";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogin = this.handleLogin.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleLogin() {
    const { user_name, user_pass } = this.state;
    this.props.onLogin({ user_name, user_pass });
  }

  handleRegister() {
    this.props.onSelect("register");
  }

  handleUsername(e) {
    this.setState({ user_name: e });
  }

  handlePassword(e) {
    this.setState({ user_pass: e });
  }

  render() {
    const { isBusy } = this.props;
    const { user_name, user_pass } = this.state;

    return (
      <div>
        <Input
          className="mt-4"
          title="प्रयोगकर्ताको नाम"
          direction="vertical"
          value={user_name}
          onChange={this.handleUsername}
        />
        <Input
          className="mt-4"
          type="user_pass"
          title="पासवर्ड "
          direction="vertical"
          value={user_pass}
          onChange={this.handlePassword}
          onEnter={this.handleLogin}
        />

        <div className="justify-content-center d-flex mt-4">
          <Button name="लग ईन " onClick={this.handleLogin} />
        </div>
        {/* <div className="justify-content-center d-flex mt-4">
          <span className="dsl-b12">Don't have account?</span>
          <span className="dsl-p12 ml-1">
            Create one.
          </span>
        </div>
        <div className="justify-content-center d-flex mt-4">
          <a className="dsl-p12">
            Forgot Your Password?
          </a>
        </div> */}
      </div>
    );
  }
}

SignIn.propTypes = {
  user_name: PropTypes.string,
  user_pass: PropTypes.string,
  onLogin: PropTypes.func,
};

SignIn.defaultProps = {
  user_name: "",
  user_pass: "",
  OnLogin: () => {},
};

export default SignIn;

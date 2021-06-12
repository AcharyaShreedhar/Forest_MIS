import React, { Component } from "react";
import { connect } from "react-redux";
import { isEmpty, isNil } from "ramda";
import { HeaderComponent } from "../../components";
import SignIn from "./SignIn";
import AppActions from "../../actions/app";
import "./Login.scss";

export class Login extends Component {
  componentDidMount() {
    if (!isEmpty(this.props.token) && !isNil(this.props.token)) {
      this.props.history.push("/home");
    }
  }
  render() {
    return (
      <div className="dashboard">
        <div className="login pt-2">
          <HeaderComponent enabled={true} side={false} />
          <div className="sign-in">
            <div className="header">
              <p className="mb-0">वन तथा वातावरण ब्यबस्थापन सूचना प्रणाली</p>
            </div>
            <SignIn onLogin={this.props.loginUser} />
          </div>
        </div>
      </div>
    );
  }
}
Login.defaultProps = {
  loginUser: () => {},
};

const mapStateToProps = (state) => ({
  token: state.app.token,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (e) => dispatch(AppActions.loginRequest(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

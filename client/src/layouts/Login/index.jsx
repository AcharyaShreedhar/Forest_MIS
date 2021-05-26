import React, { Component } from "react";
import { HeaderComponent } from "../../components";
import SignIn from "./SignIn";
import "./Login.scss";

export class Login extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="login pt-2">
          <HeaderComponent enabled={true} side={false} />
          <div className="sign-in">
            <div className="header">
              <p className="mb-0">वन तथा वातावरण ब्यबस्थापन सूचना प्रणाली</p>
            </div>
            <SignIn />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

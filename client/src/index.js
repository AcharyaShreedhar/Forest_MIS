import React from "react";
import ReactDOM from "react-dom";
import { HeaderComponent, NavbarComponent } from "./components";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <div className="bg-light">
      <HeaderComponent />
      <NavbarComponent />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

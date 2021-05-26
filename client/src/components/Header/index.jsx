import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./Header.scss";

class HeaderComponent extends Component {
  render() {
    const { enabled, side } = this.props;
    return (
      <Row className={enabled ? "" : "m-0"}>
        {enabled ? (
          <div
            className={side ? "header_content_sidenav" : "header_content_top"}
          >
            <div className="gov-logo">
              <Image src="/images/nepal-govt.png" className="img-fluid" />
            </div>
            <div className="text-center">
              <p className="mb-0">प्रदेश सरकार</p>
              <p className="mb-0">उद्योग, पर्यटन, वन तथा वातावरण मन्त्रालय</p>
              <p className="mb-0">गण्डकी प्रदेश, पोखरा</p>
            </div>
            <div className="flag">
              <Image src="/nepalflag.gif" className="img-fluid" />
            </div>
          </div>
        ) : (
          <div className="gov-logo-collapsed">
            <Image src="/images/nepal-govt.png" className="img-height" />
          </div>
        )}
      </Row>
    );
  }
}

export default HeaderComponent;

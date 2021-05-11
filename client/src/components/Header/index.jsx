import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./Header.scss";

class HeaderComponent extends Component {
  render() {
    const { enabled } = this.props;
    return (
      <Row className={enabled ? "" : "m-0"}>
        {enabled ? (
          <div className="header_content">
            <div className="gov-logo">
              <Image src="/images/nepal-govt.png" className="img-fluid" />
            </div>
            <div className="text-center">
              <p>प्रदेश सरकार</p>
              <p>उद्योग, पर्यटन, वन तथा वातावरण मन्त्रालय</p>
              <p>गण्डकी प्रदेश, पोखरा</p>
            </div>
            <div>
              <Image src="/nepalflag.gif" className="img-fluid flag" />
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

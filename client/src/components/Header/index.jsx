import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./Header.scss";

class HeaderComponent extends Component {
  render() {
    return (
      <Row className="header_content">
        <Col xs={12} sm={6} md={3} lg={3} className="app-logo">
          <Image src="/images/nepal_logon.png" />
        </Col>
        <Col xs={12} sm={6} md={3} lg={3} className="info_section">
          <p>प्रदेश सरकार</p>
          <p>उद्योग, पर्यटन, वन तथा वातावरण मन्त्रालय</p>
          <p>गण्डकी प्रदेश, पोखरा</p>
        </Col>
        <Col xs={12} sm={6} md={3} lg={3} className="app-logo">
          <Image src="/nepalflag.gif" />
        </Col>
      </Row>
    );
  }
}

export default HeaderComponent;

import React, { PureComponent } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes as logo } from "@fortawesome/free-solid-svg-icons";

import LoginLogo from "../../assets/login-logo.svg";

import "./login.css";

export default class Login extends PureComponent {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h6 className="d-flex align-items-center">
              <FontAwesomeIcon icon={logo} size="3x" className="mt-4" />
              <span className="mt-4 ml-3">Logo</span>
            </h6>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h1 className="font-weight-medium mb-4">Welcome!</h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <h3 className="font-weight-normal mb-5 instructions">
              Sign in by entering the information below
            </h3>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group
                controlId="formBasicCheckbox"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Form.Check type="checkbox" label="Remember me" />
                <Form.Text controlId="formBasicCheckbox">
                  <Link to="#">Forgot password?</Link>
                </Form.Text>
              </Form.Group>

              <Link to="/courses">
                <Button variant="primary" type="button" className="main-button">
                  Sign In
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <img
              className="mt-5"
              style={{ width: "100%" }}
              src={LoginLogo}
              alt="Login Logo"
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

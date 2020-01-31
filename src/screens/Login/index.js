import React, { PureComponent } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes as logo } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import LoginLogo from "../../assets/login-logo.svg";
import * as emailAuthActions from "../../redux/Sessions/actions";

import "./login.css";

class Login extends PureComponent {

  constructor(props) {
    super(props);
    this.state = { email: "indi3.rok@gmail.com", password: "123123" };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  handleEmailChange(event) {
    const email = event.target.value;
    this.setState({ email });
  }

  handlePasswordChange(event) {
    const password = event.target.value;
    this.setState({ password });
  }

  submitLogin() {
    const {
      actions: { login }
    } = this.props;

    const { email, password } = this.state;

    login({ email, password });

    this.setState({ email: "", password: "" });
  }

  renderErrors() {
    const { errors } = this.props;
    if (errors) {
      return (
        <Alert variant="danger" className="mt-4">
          {errors}
        </Alert>
      );
    }
  }

  render() {
    return (
      <Container>
        <Row> {this.renderErrors()}</Row>
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
                <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
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

                <Button variant="primary" type="button" className="main-button" onClick={this.submitLogin}>
                  Sign In
                </Button>
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


const mapStateToProps = state => {
  return { errors: state.EmailAuth.errors.SignIn };
};

const mapDispatchToProps = dispatch => ({
  actions: {
    login: ({ email, password }) => {
      dispatch(emailAuthActions.login({ email, password }));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
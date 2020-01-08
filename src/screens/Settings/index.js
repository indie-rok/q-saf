import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

import AvatarDummy from "../../assets/avatar-dummy.jpg";

import "./Settings.css";

export default class Settings extends Component {
  render() {
    return (
      <main className="settings-container">
        <Form>
          <img
            src={AvatarDummy}
            alt="avatar people"
            className="img-thumbnail mb-4"
          />

          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              plaintext
              type="email"
              placeholder="Enter email"
              value="indi3.rok@gmail.com"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>

          <Form.Group controlId="formBasicConfirmPassword" className="mb-5">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </main>
    );
  }
}

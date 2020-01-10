import React, { useState } from "react";
import { Form, Button, Tabs, Tab, Container, Row, Col } from "react-bootstrap";

import AvatarDummy from "../../assets/avatar-dummy.jpg";

import "./Settings.css";

export default function Settings() {
  const [key, setKey] = useState("personal-details");

  return (
    <main className="settings-container">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={k => setKey(k)}
      >
        <Tab eventKey="personal-details" title="Personal details">
          <Container>
            <Row>
              <Col>
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

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                    />
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

                  <Button variant="primary" type="submit">
                    Save
                  </Button>
                </Form>
              </Col>

              <Col>
                <img
                  src={AvatarDummy}
                  alt="avatar people"
                  className="img-thumbnail mb-4"
                  style={{ visibility: "hidden" }}
                />
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>New Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="payment-details" title="Payment details">
          2
        </Tab>
      </Tabs>
    </main>
  );
}

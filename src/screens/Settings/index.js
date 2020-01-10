import React, { useState } from "react";
import { Form, Button, Tabs, Tab, Container, Row, Col } from "react-bootstrap";

import AvatarDummy from "../../assets/avatar-dummy.jpg";

import "./Settings.css";

export default function Settings() {
  const [key, setKey] = useState("personal-details");

  return (
    <main className="settings-container">
      <Tabs id="settings-tabs" activeKey={key} onSelect={k => setKey(k)}>
        <Tab eventKey="personal-details" title="Personal details">
          <Container>
            <Row>
              <Col>
                <Form>
                  <Row className="mt-3">
                    <Col md={3}>
                      <img
                        src={AvatarDummy}
                        alt="avatar people"
                        className="img-thumbnail mb-4"
                      />
                    </Col>

                    <Col md={2}>
                      <Button variant="primary" type="submit" className="mt-4">
                        Update
                      </Button>
                    </Col>

                    <Col md={3}>
                      <Button variant="default" type="submit" className="mt-4">
                        Remove
                      </Button>
                    </Col>
                  </Row>

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
                    Save name changes
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

                <Button variant="primary" type="submit">
                  Change password
                </Button>
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="payment-details" title="Payment details">
          <Container>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label>Cardholder name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter cardholder name"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Card number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter cardholder number"
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Date</Form.Label>
                      <Form.Control type="password" placeholder="10/21" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control type="password" placeholder="029" />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" type="submit">
                  Save payment details
                </Button>
              </Col>
            </Row>
          </Container>
        </Tab>
      </Tabs>
    </main>
  );
}

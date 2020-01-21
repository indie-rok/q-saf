import React, { Component } from "react";
import {
  Form,
  Container,
  Button,
  InputGroup,
  Row,
  Col,
  Dropdown
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import uuid from "uuid/v4";

import "./NewCourse.css";

export default class NewCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      duration: "",
      description: "",
      newLink: {
        id: uuid(),
        type: "youtube",
        data: "",
        title: ""
      },
      links: [
        {
          id: "1",
          type: "youtube",
          data: "http://youtube.com/123",
          title: "Youtube vid"
        },
        { id: "3", type: "html", data: "<iframe>xd</iframe>" }
      ]
    };

    this.addLink = this.addLink.bind(this);
    this.removeLink = this.removeLink.bind(this);
  }

  async addLink() {
    await this.setState({
      newLink: { id: uuid() }, //reseting new id
      links: [...this.state.links, this.state.newLink]
    });
    console.log(this.state.links);
  }

  removeLink(event) {
    const links = this.state.links.filter(
      link => link.id !== event.target.dataset.deleteId
    );
    console.log(links);
    this.setState({ links });
  }

  updateNewLink(key) {
    this.setState({
      newLink: { ...this.state.newLink, [key]: event.target.value } //eslint-disable-line
    });
  }

  renderLinks() {
    return this.state.links.map(link => {
      return (
        <Row>
          <Col md={{ span: 2 }}>
            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" value={link.type}>
                <option value="youtube">Youtube</option>
                <option value="vimeo">Vimeo</option>
                <option value="html">HTML</option>
              </Form.Control>
            </Form.Group>
          </Col>
          {link.type !== "html" ? (
            <Col>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  value={link.title}
                />
              </Form.Group>
            </Col>
          ) : (
            ""
          )}

          <Col>
            <Form.Group>
              <Form.Label>Data</Form.Label>
              <Form.Control
                as="textarea"
                rows={link.type === "html" ? "3" : "1"}
                placeholder="Enter html or link"
                value={link.data}
              />
            </Form.Group>
          </Col>
          <Col md={{ span: 1 }}>
            <Button
              variant="danger"
              className="align-items-center"
              data-delete-id={link.id}
              onClick={this.removeLink}
              style={{ marginTop: 30 }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </Col>
          <hr />
        </Row>
      );
    });
  }

  render() {
    return (
      <Container style={{ minHeight: "auto" }}>
        <h3 className="mt-2">Add course</h3>

        <Form>
          <Row>
            <Col md={{ span: 8 }}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Course Name</Form.Label>
                <Form.Control type="text" placeholder="Enter course name" />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Duration</Form.Label>
                <Form.Control type="email" placeholder="Enter duration" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Enter description"
                />
              </Form.Group>
            </Col>
          </Row>

          <h6 className="mb-3">Add resource</h6>

          <Row>
            <Col md={{ span: 2 }}>
              <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Control
                  as="select"
                  onChange={() => this.updateNewLink("type")}
                >
                  <option value="youtube">Youtube</option>
                  <option value="vimeo">Vimeo</option>
                  <option value="html">HTML</option>
                </Form.Control>
              </Form.Group>
            </Col>
            {this.state.newLink.type !== "html" ? (
              <Col>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    onChange={() => this.updateNewLink("title")}
                  />
                </Form.Group>
              </Col>
            ) : (
              ""
            )}

            <Col>
              <Form.Group>
                <Form.Label>Data</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={this.state.newLink.type === "html" ? "3" : "1"}
                  placeholder="Enter html or link"
                  onChange={() => this.updateNewLink("data")}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={{ offset: 11, span: 1 }}>
              <Button onClick={this.addLink}>Add</Button>
            </Col>
          </Row>

          <hr />
          {this.renderLinks()}

          <Row>
            <Col>
              <Button variant="primary" type="submit" className="mt-3">
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}

import React, { Component } from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  Modal,
  Form,
  Button,
  Row,
  Col,
  Badge
} from "react-bootstrap";
import faker from "faker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import CustomToggle from "../../components/CustomToggleMenu";
import studentsData from "../../data/studentScreen";
import "./Students.css";

function AddTrainingRecordModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header></Modal.Header>
      <Modal.Body>
        <Form>
          <Container>
            <Row>
              <Col>
                <h6>Course</h6>
              </Col>
              <Col>
                <Form.Control as="select">
                  <option>Tech in home</option>
                  <option>Another course</option>
                </Form.Control>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <h6>Completion Date</h6>
              </Col>
              <Col>
                <Form.Control type="date" />
              </Col>
            </Row>

            <hr />
            <Row>
              <Col>
                <h6>Contact Hours</h6>
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Enter contact hours" />
              </Col>
            </Row>

            <hr />
            <Row>
              <Col>
                <h6>Expiration date</h6>
              </Col>
              <Col>
                <Form.Control type="date" />
              </Col>
            </Row>

            <hr />
            <Row>
              <Col>
                <h6>Instructor name</h6>
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Enter instructor name" />
              </Col>
            </Row>

            <hr />
            <Row>
              <Col>
                <h6>CEU</h6>
              </Col>
              <Col>
                <Form.Control type="text" placeholder="Enter CEU" />
              </Col>
            </Row>
          </Container>

          <hr />

          <Row>
            <Col md={{ offset: 10 }}>
              <Button variant="primary" className="">
                Add
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function addAfter(array, index, newItem) {
  return [...array.slice(0, index), newItem, ...array.slice(index)];
}

function removeAfter(array, index, newItem) {
  return [...array.slice(index, 1)];
}

export default class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentsData,
      activeStudent: null,
      activeCourse: null,
      isTrainingRecordModalOpen: false
    };
  }

  toggleRowExpand() {
    addAfter(this.state.studentsData, 1, { new: "data" });
  }

  renderRows() {
    return this.state.studentsData.map(student => (
      <tr onClick={this.toggleRowExpand}>
        <td>{student.name}</td>
        <td>{student.email}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div className="d-flex flex-column">
        <AddTrainingRecordModal
          show={this.state.isTrainingRecordModalOpen}
          onHide={() => this.setState({ isTrainingRecordModalOpen: false })}
        />
        <h5 className="font-weight-bold">Students</h5>
        <table className="students-table table-hover">
          <thead>
            <tr className="students-table--header">
              <th width="25%">Student name</th>
              <th>Email</th>
              <th>ID</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  className="rounded mr-3 ml-3"
                  src={faker.image.imageUrl(50, 50, "people")}
                />
                Emmanuel Orozco
              </td>
              <td>indi3.rok@gmai.com</td>
              <td>123</td>
              <td>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="font-weight-light"
                />
              </td>
            </tr>

            <tr>
              <td colSpan="4">
                <table className="courses-table">
                  <thead>
                    <tr className="students-table--header">
                      <th width="17%">Course Name</th>
                      <th width="17%">Course status</th>
                      <th width="17%">Certificate expires in</th>
                      <th width="17%">Date completed</th>
                      <th width="17%">Duration</th>
                      <th width="17%"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid #DFE0EB" }}>
                      <td>
                        Elementary <br />
                        <Badge variant="secondary">Online</Badge>
                      </td>
                      <td>Completed</td>
                      <td>4 months</td>
                      <td>12-12-12</td>
                      <td>3 days</td>
                      <td>
                        <Dropdown>
                          <Dropdown.Toggle
                            as={CustomToggle}
                            id="dropdown-custom-components"
                          />

                          <Dropdown.Menu>
                            <Dropdown.Item
                              eventKey="3"
                              onClick={() =>
                                this.setState({
                                  isTrainingRecordModalOpen: true
                                })
                              }
                            >
                              Add Training Record
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="1">
                              Certificate
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        Elementary <br />
                        <Badge variant="secondary">Training</Badge>
                      </td>
                      <td>Completed</td>
                      <td>4 months</td>
                      <td>12-12-12</td>
                      <td>3 days</td>
                      <td>
                        <Dropdown>
                          <Dropdown.Toggle
                            as={CustomToggle}
                            id="dropdown-custom-components"
                          />

                          <Dropdown.Menu>
                            <Dropdown.Item
                              eventKey="3"
                              onClick={() =>
                                this.setState({
                                  isTrainingRecordModalOpen: true
                                })
                              }
                            >
                              Add Training Record
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="1">
                              Certificate
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>

            <tr>
              <td>
                <img
                  className="rounded mr-3 ml-3"
                  src={faker.image.imageUrl(50, 50, "people")}
                />
                John doe
              </td>
              <td>indi3.rok@gmai.com</td>
              <td>123</td>
              <td>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="font-weight-light"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

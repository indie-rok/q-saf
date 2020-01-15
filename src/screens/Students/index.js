import React, { Component } from "react";
import {
  Container,
  Dropdown,
  Modal,
  Form,
  Button,
  Row,
  Col,
  Badge,
  Card,
  Accordion
} from "react-bootstrap";
import faker from "faker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faFilter } from "@fortawesome/free-solid-svg-icons";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import DummyImage from "../../assets/avatar-dummy.jpg";

import { Link } from "react-router-dom";

import CustomToggle from "../../components/CustomToggleMenu";
import studentsData from "../../data/studentScreen";

import "./Students.css";

function CustomAcordionToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log("totally custom!")
  );
  return (
    <FontAwesomeIcon
      icon={faChevronDown}
      onClick={decoratedOnClick}
      className="font-weight-light"
      style={{ cursor: "pointer" }}
    />
  );
}

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
                <Form.Control placeholder="Course name" />

                {/* <Form.Control as="select">
                  <option>Tech in home</option>
                  <option>Another course</option>
                </Form.Control> */}
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

  renderRows() {
    return this.state.studentsData.map(student => (
      <Accordion className="expandable-table--row border-bottom">
        <div>
          <img src={DummyImage} className="mr-2" />
          <span className="expandable-table-cell">{faker.name.findName()}</span>

          <span className="expandable-table-cell">
            {faker.internet.email()}
          </span>
          <span className="expandable-table-cell text-right">
            {faker.random.number()}
          </span>
          <span className="expandable-table-cell text-right pr-4">
            <CustomAcordionToggle eventKey={student.id} />
          </span>

          <Accordion.Collapse eventKey={student.id}>
            <table className="courses-table">
              <thead>
                <tr className="students-table--header">
                  <th width="16%" className="pl-2">
                    Course Name
                  </th>
                  <th width="16%">Course status</th>
                  <th width="16%">Certificate expires in</th>
                  <th width="16%">Date completed</th>
                  <th width="16%">Duration</th>
                  <th width="16%"></th>
                </tr>
              </thead>
              <tbody>
                {student.courses.map(course => {
                  return (
                    <tr className="course-row">
                      <td className="pl-3">
                        {course.name} <br />
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
                  );
                })}
              </tbody>
            </table>
          </Accordion.Collapse>
        </div>
      </Accordion>
    ));
  }

  render() {
    return (
      <>
        <section className="courses-menu mb-5">
          <h5 className="font-weight-bold">All Courses</h5>
          <div>
            <span className="courses-menu--item">
              <FontAwesomeIcon icon={faFilter} className="dark-gray mr-2" />
              Filter
            </span>
          </div>
        </section>

        <AddTrainingRecordModal
          show={this.state.isTrainingRecordModalOpen}
          onHide={() => this.setState({ isTrainingRecordModalOpen: false })}
        />

        <div className="expandable-table">
          <div className="mb-3 font-weight-bold dark-gray pb-3 border-bottom">
            <span className="expandable-table-cell ">Student name</span>
            <span className="expandable-table-cell ml-5">Email</span>
            <span className="expandable-table-cell text-right">
              Students ID
            </span>
          </div>

          {this.renderRows()}
        </div>
      </>
    );
  }
}

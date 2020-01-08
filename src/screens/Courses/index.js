import React, { Component } from "react";
import faker from "faker";
import { Link } from "react-router-dom";
import {
  Table,
  Button,
  Dropdown,
  Modal,
  Row,
  Col,
  Container,
  InputGroup,
  FormControl
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import CustomToggle from "../../components/CustomToggleMenu";
import FilterIcon from "../../assets/filter-icon.png";

import "./Courses.css";

function StudentsModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modal-students--header ">
        <Container>
          <Row className="pt-3">
            <Col>
              <h5 className="mt-2">All students</h5>
            </Col>
            <Col md={{ span: 6 }}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon1">
                    <FontAwesomeIcon icon={faSearch} />
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col className="text-center">
              <Button
                onClick={() => {
                  // todo add assign logic
                  props.onHide();
                }}
              >
                Assign
              </Button>
            </Col>
          </Row>
        </Container>
      </Modal.Header>
      <Modal.Body className="pt-0">
        <Table striped hover>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>ID</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Joe Doe</td>
              <td>123123</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>Joe Doe</td>
              <td>123123</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
}

export default class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studenModalOpen: false,
      courses: [
        {
          id: 1,
          course_name: faker.commerce.productName(),
          instructor_name: faker.name.findName(),
          course_status: "completed",
          certificate_expiration_months: 2,
          course_duration_hours: 3
        },
        {
          id: 2,
          course_name: faker.commerce.productName(),
          instructor_name: faker.name.findName(),
          course_status: "in progress",
          certificate_expiration_months: 2,
          course_duration_hours: 4
        },
        {
          id: 3,
          course_name: faker.commerce.productName(),
          instructor_name: faker.name.findName(),
          course_status: "assigned",
          certificate_expiration_months: 2,
          course_duration_hours: 3
        }
      ]
    };
  }

  generateRows() {
    return this.state.courses.map(item => (
      <tr className="courses--item">
        <td>
          <Link to="/coursesDetail/1">
            <img src={faker.image.imageUrl(30, 30, "people")} />
            {item.course_name}
          </Link>
        </td>
        <td>{item.certificate_expiration_months} months</td>
        <td>
          <span
            className={`course-duration ${
              item.course_duration_hours > 3
                ? "course-duration__danger "
                : "course-duration__success"
            }`}
          >
            {item.course_duration_hours}h
          </span>
        </td>
        <td>
          <Link to="/certificate/32">View</Link>
        </td>
        <td>
          <Dropdown>
            <Dropdown.Toggle
              as={CustomToggle}
              id="dropdown-custom-components"
            />

            <Dropdown.Menu>
              <Dropdown.Item eventKey="1">Edit course</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item
                eventKey="3"
                onClick={() => this.setState({ studenModalOpen: true })}
              >
                Assign Course
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div className="d-flex flex-column">
        <section className="courses-menu mb-5">
          <h5 className="font-weight-bold">All Courses</h5>
          <div>
            <Link to="/newCourse">
              <Button className="courses-menu--button">Create Course</Button>
            </Link>
            <span className="courses-menu--item">
              <img src={FilterIcon} alt="Filter Icon" /> Filter
            </span>
          </div>
        </section>

        <StudentsModal
          show={this.state.studenModalOpen}
          onHide={() => this.setState({ studenModalOpen: false })}
        />

        <Table hover className="font-weight-regular courses-table">
          <thead>
            <tr>
              <th width="40%">Course Name</th>
              <th width="30%">Certificate expires in</th>
              <th width="10%">Duration</th>
              <th width="10%"></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.generateRows()}</tbody>
        </Table>
      </div>
    );
  }
}

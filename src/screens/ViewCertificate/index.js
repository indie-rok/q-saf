import React, { Component } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import TimeColor from "../../components/TimeColor";
import "./ViewCertificate.css";

export default class ViewCertificate extends Component {
  render() {
    return (
      <Container className="mt-4">
        <Row>
          <Col>
            <h1>Certificate</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <Table>
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Instructor Name</th>
                  <th>Certificate Duration</th>
                  <th>Date Completed</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cool course</td>
                  <td>John Dow</td>
                  <td>3 months</td>
                  <td>21-21-2012</td>
                  <td>
                    <TimeColor duration="3" />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        <Row className="mb-2">
          <Container className="certificate">
            <Row className="mb-5">
              <Col className="text-center">
                <h5>Prodly Presended</h5>
                <h1>Gerry Garcia</h1>
                <h6 className="">ID: 123123</h6>
                <h5>
                  For succesfully compleining the following training course
                </h5>
                <h3>
                  FORKLIFT OPERATOR SAFETY TRINING REFRESHER LEVEL (CLASS 4)
                </h3>
                <h6>CEU: 0.1</h6>
                <h6>Contact Hourse</h6>
                <h6>Completion Date: September 9th, 2019</h6>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col md={{ span: 4, offset: 1 }}>
                <hr />
                <p className="text-center">Instructor Name</p>
              </Col>
              <Col className="d-flex justify-content-center align-items-center">
                <p>Company Logo</p>
              </Col>
            </Row>
          </Container>
        </Row>

        <Row className="mt-3">
          <Col md={{ span: 2, offset: 8 }} className="mt-2">
            <Link to="/shareCert">
              <FontAwesomeIcon size={"lg"} className="mr-3" icon={faShareAlt} />
              <span>Share</span>
            </Link>
          </Col>
          <Col>
            <Link to="/generatePdf">
              <Button>Generate PDF</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

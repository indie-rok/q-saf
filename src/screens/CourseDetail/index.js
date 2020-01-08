import React, { Component } from "react";
import { Button } from "react-bootstrap";

import TimeIcon from "../../assets/time-red-icon.png";
import CourseLesson from "../../components/CourseLesson";

import "./CourseDetail.css";

export default class CourseDetail extends Component {
  render() {
    return (
      <main className="course-detail">
        <div class="d-flex justify-content-between">
          <h4>Technical equipment</h4>
          <Button>Edit this course</Button>
        </div>
        <section className="course-content">
          <section className="course-video">
            <iframe
              src="https://player.vimeo.com/video/76979871"
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="mt-5 mb-4 d-block mx-auto"
            ></iframe>

            <h6>Course Description</h6>
            <p className="course-video--description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Delectus, vero ratione, ea dicta incidunt minus rem quam officiis
              numquam doloremque suscipit consequatur. Nihil error totam fugiat
              quo doloribus mollitia laudantium!
            </p>
          </section>

          <section className="course-sylabus">
            <p className="badge badge-light d-flex justify-content-end">
              <div className="border p-2 rounded">
                <img src={TimeIcon} className="mr-2" alt="Time Icon" />
                <span>50 min</span>
              </div>
            </p>
            <h6 className="mb-3">Course Details</h6>
            <CourseLesson status="watched" />
            <CourseLesson status="currentlyWatching" />
            <CourseLesson status="toWatch" />

            <Button className="course-sylabus--finish-button">
              Finish the course
            </Button>
          </section>
        </section>
      </main>
    );
  }
}

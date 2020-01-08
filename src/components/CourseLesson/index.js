import React, { Component } from "react";
import WatchedVideoIcon from "../../assets/watched-video-icon.png";
import CurrentlyWatchingIcon from "../../assets/currently-watching-video-icon.png";
import ToWatchIcon from "../../assets/play-icon.png";
import TimeGrayIcon from "../../assets/time-gray-icon.png";

import "./CourseLesson.css";

const statusMapping = {
  watched: {
    backgroundText: "#79B2F5",
    background: "#F5F6FF",
    displayIcon: WatchedVideoIcon
  },
  currentlyWatching: {
    backgroundText: "#F57979",
    background: "#FFF5F5",
    displayIcon: CurrentlyWatchingIcon
  },
  toWatch: {
    backgroundText: "#454647",
    background: "#F5F6FF",
    displayIcon: ToWatchIcon
  }
};

export default function CourseLesson({ lessonDetails, status }) {
  return (
    <section
      className="course-unit"
      style={{ background: statusMapping[status].background }}
    >
      <p
        className="badge badge-info mt-2"
        style={{ background: statusMapping[status].backgroundText }}
      >
        1
      </p>
      <p className="course-title">
        Introduction
        <span>
          <img src={TimeGrayIcon} alt="time icon" />
          <small>5 min</small>
        </span>
      </p>
      <img src={statusMapping[status].displayIcon} alt="lesson status icon" />
    </section>
  );
}

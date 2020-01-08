import React from "react";

import "./TimeColor.css";

export default function TimeColor({ duration }) {
  return (
    <span
      className={`course-duration ${
        parseInt(duration) > 3 ? "time-color__danger " : "time-color__success"
      }`}
    >
      {duration}h
    </span>
  );
}

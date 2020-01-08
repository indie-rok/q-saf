import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes as logo } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css";
import StudentIcon from "../../assets/student-icon.png";
import BookIcon from "../../assets/book-icon.png";
import GearIcon from "../../assets/gear-icon.png";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="menu">
        <Link to="/login">
          <li className="menu--item">
            <h6 className="d-flex align-items-center">
              <FontAwesomeIcon icon={logo} size="2x" className="mt-4" />
              <span className="mt-4 ml-3">Logo</span>
            </h6>
          </li>
        </Link>

        <NavLink to="/students" activeClassName="menu--item__active">
          <li className="menu--item">
            <img src={StudentIcon} alt="Student Icon" />
            Students
          </li>
        </NavLink>

        <NavLink to="/courses" activeClassName="menu--item__active">
          <li className="menu--item">
            <img src={BookIcon} alt="Book Icon" />
            Courses
          </li>
        </NavLink>

        <NavLink to="/settings">
          <li className="menu--item">
            <img src={GearIcon} alt="Gear Icon" />
            Settings
          </li>
        </NavLink>
      </nav>
    );
  }
}

import React from "react";
import faker from "faker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./TopSubMenu.css";

export default function TopSubMenu() {
  return (
    <nav className="top-submenu">
      <FontAwesomeIcon
        icon={faSearch}
        className="mr-3 top-submenu--search-icon"
      />
      <p className="top-submenu--profile-name border-left pl-3">
        John Ferdinand
      </p>
      <img
        src={faker.image.imageUrl()}
        className="top-submenu--profile-image"
        alt="profile"
      />
    </nav>
  );
}

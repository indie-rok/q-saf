import React from "react";
import faker from "faker";

import "./TopSubMenu.css";

export default function TopSubMenu() {
  return (
    <nav className="top-submenu">
      <p className="top-submenu--profile-name">John Ferdinand</p>
      <img
        src={faker.image.imageUrl()}
        className="top-submenu--profile-image"
        alt="profile"
      />
    </nav>
  );
}

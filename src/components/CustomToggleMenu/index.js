import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV as toggler } from "@fortawesome/free-solid-svg-icons";

export default React.forwardRef(({ children, onClick }, ref) => (
  <button
    ref={ref}
    onClick={e => {
      e.preventDefault();
      onClick(e);
    }}
    className="btn custom-toggle"
    data-toggle="dropdown"
    aria-haspopup="true"
    aria-expanded="false"
    style={{ background: "none" }}
  >
    <FontAwesomeIcon icon={toggler} size="1x" style={{ fontWeight: 100 }} />
    {children}
  </button>
));

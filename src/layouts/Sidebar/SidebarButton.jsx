import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarButton = props => {
  const url = window.location.pathname;
  return (
    <li className="nav-item active">
      <Link className="nav-link" to={props.path}>
        <FontAwesomeIcon className="mr-3" icon={props.icon}>
          {" "}
        </FontAwesomeIcon>
        <span className={url === props.path ? "menu-title" : "menu"}>
          {props.sidebarName}
        </span>
      </Link>
    </li>
  );
};

export default SidebarButton;

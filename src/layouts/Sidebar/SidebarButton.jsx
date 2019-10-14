import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SidebarButton = props => {
  const [active] = useState(true)
  return (
    <li className="nav-item">
      <a className="nav-link" href={props.path}>
      <FontAwesomeIcon className="mr-3" icon={props.icon}> </FontAwesomeIcon>
        <span className={active ? "menu-title" : "menu"}>
          {props.sidebarName}
        </span>
      </a>
    </li>
  );
};

export default SidebarButton;

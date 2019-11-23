import React, { useState } from "react";
// import { Link } from "react-router-dom";
// Components
import SidebarButton from "./SidebarButton";
// import "./_varible.css";
// import routes from "../../routes.js";
import "../../assets/css/style.css";

import face1Jpg from "../../assets/images/faces/face2.jpg";

function Sidebar() {
  const [sidebar] = useState([
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: "tachometer-alt",
      active: true
    },
    {
      name: "Product",
      path: "/admin/product",
      icon: "shopping-bag"
    },
    {
      name: "Stock",
      path: "/admin/stock",
      icon: "cubes"
    },
    {
      name: "Supplier",
      path: "/admin/supplier",
      icon: "people-carry"
    },
    {
      name: "Import",
      path: "/admin/Import",
      icon: "file-import"
    },
    {
      name: "User",
      path: "/admin/user",
      icon: "user"
    },
    {
      name: "Roles & Permissions",
      path: "/admin/role-permission",
      icon: "lock"
    },
    {
      name: "Report",
      path: "/admin/report",
      icon: "receipt"
    },
    {
      name: "Settings",
      path: "/admin/setting",
      icon: "cogs"
    }
  ]);
  return (
    <nav className="sidebar sidebar-offcanvas fixed" id="sidebar">
      <ul className="nav">
        <li className="nav-item nav-profile">
          <a href="/" className="nav-link">
            <div className="nav-profile-image">
              <img src={face1Jpg} alt="profile" />
              <span className="login-status online"></span>
            </div>
            <div className="nav-profile-text d-flex flex-column">
              <span className="font-weight-bold mb-2">David Grey. H</span>
              <span className="text-secondary text-small">Project Manager</span>
            </div>
            <i className="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
          </a>
        </li>
        {sidebar.map((sb, id) => (
          <SidebarButton
            key={id}
            sidebarName={sb.name}
            path={sb.path}
            icon={sb.icon}
          ></SidebarButton>
        ))}
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#general-pages"
            aria-expanded="false"
            aria-controls="general-pages"
          >
            <span className="menu-title">Sample Pages</span>
            <i className="menu-arrow"></i>
            <i className="mdi mdi-medical-bag menu-icon"></i>
          </a>
          <div className="collapse" id="general-pages">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <a className="nav-link" href="pages/samples/blank-page.html">
                  Blank Page
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/samples/login.html">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/samples/register.html">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/samples/error-404.html">
                  404
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="pages/samples/error-500.html">
                  500
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item sidebar-actions">
          <span className="nav-link">
            <button className="btn btn-block btn-lg btn-gradient-primary mt-4">
              Log out
            </button>
            {/* <div className="mt-4">
              <div className="border-bottom">
                <p className="text-secondary">Categories</p>
              </div>
              <ul className="gradient-bullet-list mt-4"></ul>
            </div> */}
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;

import React from "react";
import { Navbar, Sidebar } from "../../layouts";
import { Route, Switch } from "react-router-dom";
import routes from "../../routes.js";
import Footer from "../Footer";

function Admin() {
  function getRoutes(routes) {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  }
  return (
    <div className="container-scroller">
      <Navbar></Navbar>
      <div className="container-fluid page-body-wrapper">
        <Sidebar></Sidebar>
        <div class="main-panel">
          <Switch>{getRoutes(routes)}</Switch>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
export default Admin;

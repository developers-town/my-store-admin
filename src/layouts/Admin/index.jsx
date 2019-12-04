import React from "react";
import { Provider } from "react-redux";
import { Navbar, Sidebar } from "../../layouts";
import { Route, Switch } from "react-router-dom";
import routes from "../../routes.js";
import Footer from "../Footer";
import actionCallApi from "../../services/actionCallApi.js";

function Admin(props) {
  function getRoutes(routes) {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        actionCallApi()
          .then(response => {})
          .catch(err => {
            if (err.response.status) {
              window.localStorage.removeItem("userToken");
              window.location.href = "/";
            }
          });
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
      <Provider store={props.store}>
        <Navbar></Navbar>
      </Provider>

      <div className="container-fluid page-body-wrapper">
        <Sidebar></Sidebar>
        <div className="main-panel">
          <Switch>{getRoutes(routes)}</Switch>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default Admin;

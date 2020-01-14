import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Navbar, Sidebar } from "../../layouts";
import { Route, Switch } from "react-router-dom";
import routes from "../../routes.js";
import Footer from "../Footer";
import { useDispatch } from "react-redux";
import { currentUser } from "../../actions/user-actions";

function Admin(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  },[dispatch]);
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
      <Provider store={props.store}>
        <Navbar></Navbar>
      </Provider>

      <div className="container-fluid page-body-wrapper">
        <Sidebar></Sidebar>
        <div className="main-panel">
          <Switch>{getRoutes(routes)}</Switch>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Admin;

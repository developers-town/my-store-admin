import React from "react";
import ReactDOM from "react-dom";
// import {createStore, combineReducers} from "redux";

// import App from './App';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import auth from "./services/authService";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Admin } from "./layouts";
import "./assets/css/style.css";
import "./assets/vendors/mdi/css/materialdesignicons.min.css";
import "./assets/vendors/css/vendor.bundle.base.css";
// import './assets/vendors/js/vendor.bundle.base.js'
// import './assets/vendors/chart.js/Chart.min.js'
import "./assets/js/off-canvas.js";
import "./assets/js/hoverable-collapse.js";
import "./assets/js/misc.js";

import {
  faTachometerAlt,
  faHome,
  faCubes,
  faPeopleCarry,
  faFileImport,
  faUser,
  faShoppingBag,
  faLock,
  faReceipt,
  faCogs
} from "@fortawesome/free-solid-svg-icons";
import { Login } from "./pages";
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
library.add(
  faTachometerAlt,
  faHome,
  faCubes,
  faPeopleCarry,
  faFileImport,
  faUser,
  faShoppingBag,
  faLock,
  faReceipt,
  faCogs
);

const store = createStore(
  allReducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log(window.localStorage.getItem('userToken'));
// const e = store.getState();
// console.log(proce);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/admin"
        render={props =>
          !auth.getCurrentUser() ? (
            <Redirect to="/login" />
          ) : (
            <Provider store={store}>
              <Admin store={store} {...props} />
            </Provider>
          )
        }
      />
      <Route
        path="/login"
        render={() =>
          auth.getCurrentUser() ? (
            <Redirect to="/" />
          ) : (
            <Provider store={store}>
              <Login />
            </Provider>
          )
        }
      ></Route>
      <Redirect from="/" to="/admin/dashboard" />

    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import ENV from "../../config/config.json";
import FormGroup from "../../components/FormGroup";

const CreateUser = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: ""
  });

  const handleCreateClick = e => {
    e.preventDefault();
    axios
      .post(ENV.API_ENDPOINT + "user/signup", data, {
        headers: {
          "x-store": localStorage.getItem(ENV.APP_TOKEN)
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(ex => {
        console.log(ex);
        throw new Error(ex);
      });
  };
  useEffect(() => {}, []);
  // const [first_name, setfirst_name] = useState();
  // const [last_name, setlast_name] = useState();
  // const [userName, setUsername] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const handleInputChange = e => {
  //   console.log(e.target.value);
  // };
  return (
    <React.Fragment>
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-account"></i>
            </span>
            Create New User{""}
          </h3>
          <div></div>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li
                className="breadcrumb-item breadcrumb-link"
                aria-current="page"
              >
                <Link to="/user"> Users </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <span></span> Create User{" "}
              </li>
            </ul>
          </nav>
        </div>
        <div className="row">
          <div className="card col-6">
            <div className="card-body">
              <div>
                <h3>New User Information</h3>
              </div>
              <form action="">
                <div className="d-flex">
                  <div className="col-4 overflow-hidden my-3">
                    <img
                      className="img-fluid"
                      src="https://lakewangaryschool.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"
                      alt=""
                    />
                  </div>
                  <div className="align-self-end pb-2">
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="user-choose-image"
                    >
                      Choose Image
                    </label>
                    <input
                      type="file"
                      id="user-choose-image"
                      className="d-none"
                    />
                  </div>
                </div>
                <div className="d-flex">
                  <div className="flex-grow-1 pr-2">
                    <FormGroup
                      onInputChange={e =>
                        setData({
                          first_name: e.target.value,
                          last_name: data.last_name,
                          username: data.username,
                          email: data.email,
                          password: data.password
                        })
                      }
                      label="First Name"
                    ></FormGroup>
                  </div>
                  <div className="flex-grow-1 pl-2">
                    <FormGroup
                      onInputChange={e =>
                        setData({
                          first_name: data.first_name,
                          last_name: e.target.value,
                          username: data.username,
                          email: data.email,
                          password: data.password
                        })
                      }
                      label="Last Name"
                    ></FormGroup>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="flex-grow-1 pr-2">
                    <FormGroup
                      label="Username"
                      onInputChange={e =>
                        setData({
                          first_name: data.first_name,
                          last_name: data.last_name,
                          username: e.target.value,
                          email: data.email,
                          password: data.password
                        })
                      }
                    ></FormGroup>
                  </div>
                  <div className="flex-grow-1 pl-2">
                    <FormGroup
                      onInputChange={e =>
                        setData({
                          first_name: data.first_name,
                          last_name: data.last_name,
                          username: data.username,
                          email: e.target.value,
                          password: data.password
                        })
                      }
                      label="Email"
                      inputType="email"
                    ></FormGroup>
                  </div>
                </div>
                <FormGroup
                  onInputChange={e =>
                    setData({
                      first_name: data.first_name,
                      last_name: data.last_name,
                      username: data.username,
                      email: data.email,
                      password: e.target.value
                    })
                  }
                  label="Password"
                  inputType="password"
                ></FormGroup>
                <div>
                  <button
                    onClick={handleCreateClick}
                    className="btn btn-block btn-primary"
                  >
                    Create User
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateUser;

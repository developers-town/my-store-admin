import React, { useState } from "react";
import { Link } from "react-router-dom";
import {actionPost} from "../../reducers/actionCallApi";
import FormGroup from "../../components/FormGroup";
import Loading from "../../assets/images/rolling-loading.svg";

const CreateUser = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [responseStatus, setResponseStatus] = useState({
    status: "",
    type: ""
  });
  const handleCreateClick = e => {
    e.preventDefault();
    var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (
      data.first_name.length > 2 &&
      data.last_name.length > 2 &&
      data.username.length > 2 &&
      data.email.match(mailformat) &&
      data.password.length > 2
    ) {
      setIsLoading(true);
      postData();
    }
  };

  function postData() {
    var parseBody = JSON.stringify(data);
    var body = JSON.parse(parseBody);
    window.scrollTo(0, 0);
    actionPost("user/signup", body)
      .then(response => {
        setIsLoading(false);
        setResponseStatus({
          status: "User have been created!",
          type: "alert-success"
        });
        console.log(response);
      })
      .catch(ex => {
        setIsLoading(false);
        setResponseStatus({
          status: "Error! Please try again",
          type: "alert-danger"
        });
        console.log(ex);
        // throw new Error(ex);
      });
  }
  return (
    <React.Fragment>
      <div
        className={isLoading ? "fixed-top vh-100 d-flex" : "d-none"}
        style={{ backgroundColor: "rgba(255, 255, 255, .5)" }}
      >
        <img className="align-self-center mx-auto" src={Loading} alt="" />
      </div>
      <div className="content-wrapper">
        <div className={"alert " + responseStatus.type} role="alert">
          {responseStatus.status}
        </div>
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-account"></i>
            </span>
            Create New User{""}
          </h3>

          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li
                className="breadcrumb-item breadcrumb-link"
                aria-current="page"
              >
                <Link to="/admin/user"> Users </Link>
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
                      validation={data.first_name.length < 3}
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
                      validation={data.last_name.length < 3}
                      label="Last Name"
                    ></FormGroup>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="flex-grow-1 pr-2">
                    <FormGroup
                      validation={data.username.length < 3}
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
                      validation={
                        !data.email.match(
                          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                        )
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
                  validation={data.password.length < 4}
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

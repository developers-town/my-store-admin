import React from "react";
import { Link } from "react-router-dom";
import FormGroup from "../../components/FormGroup";

const CreateUser = () => {
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
                    <FormGroup label="First Name"></FormGroup>
                  </div>
                  <div className="flex-grow-1 pl-2">
                    <FormGroup label="Last Name"></FormGroup>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="flex-grow-1 pr-2">
                    <FormGroup label="Username"></FormGroup>
                  </div>
                  <div className="flex-grow-1 pl-2">
                    <FormGroup label="Email" inputType="email"></FormGroup>
                  </div>
                </div>
                <FormGroup label="Password" inputType="password"></FormGroup>
                <div>
                  <button className="btn btn-block btn-primary">
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

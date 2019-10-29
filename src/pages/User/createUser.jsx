import React from "react";

const CreateUser = () => {
  return (
    <React.Fragment>
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-account"></i>
            </span>
            User Accounts{""}
            <button className="btn btn-outline-primary ml-2">
              Create New User
            </button>
          </h3>
          <div></div>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <span></span> Users{" "}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateUser;

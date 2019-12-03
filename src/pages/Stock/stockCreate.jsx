import React, { useState } from "react";
import { Link } from "react-router-dom";
import { actionPost } from "../../reducers/actionCallApi";
import FormGroup from "../../components/FormGroup";
import Loading from "../../assets/images/rolling-loading.svg";

const CreateStock = () => {
  const isLoading = useState(false);
  const responseStatus = useState({
    status: "",
    type: ""
  });
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
            Create New Stock{""}
          </h3>

          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li
                className="breadcrumb-item breadcrumb-link"
                aria-current="page"
              >
                <Link to="/admin/stock"> Stock </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <span></span> Create Stock{" "}
              </li>
            </ul>
          </nav>
        </div>
        <div className="row">
          <div className="card col-6">
            <div className="card-body">
              <div>
                <h3>Fill out new stock</h3>
              </div>
              <form action="">
                <div className="flex-grow-1 pr-2">
                  <FormGroup label="First Name" validation="true"></FormGroup>
                </div>
                <div>
                  <button
                    // onClick={handleCreateClick}
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
export default CreateStock;

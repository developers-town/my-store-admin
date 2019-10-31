import React from "react";
import Table from "../../components/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Import() {
  return (
    <div className="content-wrapper">
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white mr-2">
            <div className="d-flex h-100">
              <FontAwesomeIcon
                className="align-self-center mx-auto "
                icon="file-import"
              >
                {" "}
              </FontAwesomeIcon>
            </div>
          </span>
          Import{""}
          <a href="/admin/user/create">
            <button className="btn btn-outline-primary ml-2">
              View Import
            </button>
          </a>
        </h3>
        <div></div>
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <span></span> 
            </li>
          </ul>
        </nav>
      </div>
      <div className="row">
        <div className="col-xl-8 col-lg-7 col-4 grid-margin">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">All Import</h1>
              <div className="table-responsive">
                <Table
                  header={["ID", "Product", "Quantity","Type"]}
                  apiEndpoint="stock"
                ></Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Import;

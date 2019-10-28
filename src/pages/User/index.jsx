import React from "react";
import face4Jpg from "../../assets/images/faces/face4.jpg";
function Dashboard() {
  return (
    <div className="content-wrapper">
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white mr-2">
            <i className="mdi mdi-account"></i>
          </span>
          User Accounts
        </h3>
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <span></span> Users{" "}
            </li>
          </ul>
        </nav>
      </div>
      <div className="row">
        <div className="col-8 grid-margin">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">All Users</h1>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <th>ID</th>
                    <th>UserName</th>
                    <th>Role</th>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="nav-profile-img">
                <img style={{width: "50%", borderRadius: "50%"}} src={face4Jpg} alt="face" />
                <span className="availability-status online"></span>
              </div>
              <h3>"The Rock"</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

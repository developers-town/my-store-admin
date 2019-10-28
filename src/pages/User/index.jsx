import React from "react";
import face18Jpg from "../../assets/images/faces/face18.jpg";
function Dashboard() {
  return (
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
      <div className="row">
        <div className="col-8 grid-margin">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">All Users</h1>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <th>ID</th>
                    <th>UserName</th>
                    <th>Role</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="py-1">010</td>
                      <td> Herman Beck </td>
                      <td>
                        <div class="progress">
                          <div
                            class="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="py-1">001</td>
                      <td> Messsy Adam </td>
                      <td>
                        <div class="progress">
                          <div
                            class="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "75%" }}
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="py-1">001</td>
                      <td> John Richards </td>
                      <td>
                        <div class="progress">
                          <div
                            class="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "90%" }}
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="py-1">002</td>
                      <td> Peter Meggik </td>
                      <td>
                        <div class="progress">
                          <div
                            class="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="py-1">003</td>
                      <td> Edward </td>
                      <td>
                        <div class="progress">
                          <div
                            class="progress-bar bg-danger"
                            role="progressbar"
                            style={{ width: "35%" }}
                            aria-valuenow="35"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="py-1">004</td>
                      <td> John Doe </td>
                      <td>
                        <div class="progress">
                          <div
                            class="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "65%" }}
                            aria-valuenow="65"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="py-1">005</td>
                      <td> Henry Tom </td>
                      <td>
                        <div class="progress">
                          <div
                            class="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "20%" }}
                            aria-valuenow="20"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-row">
                <div
                  style={{
                    backgroundImage: `url(${face18Jpg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    margin: "0",
                    padding: "0",
                    height: "5rem",
                    width: "5rem",
                    content: "",
                    borderRadius: "50%",
                    marginRight: "2rem"
                  }}
                ></div>
                <div>
                  <h3>Alice Eve</h3>
                  <h5>Project Manager</h5>
                </div>
              </div>
              <div className="pt-3">
                <div>
                  <hr />
                  <h5>Email</h5>
                  <p className="pl-1">aliceeve@gmail.com</p>
                </div>
                <div>
                  <hr />
                  <h5>Phone Number</h5>
                  <p className="pl-1">+(855) 012 554 665</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-row">
                <div>
                  <h3>All Managers</h3>
                  <h5>Total 5 Users</h5>
                </div>
              </div>
              <div className="pt-3">
                <table className="table">
                  <thead>
                    <th>ID</th>
                    <th>Picture</th>
                    <th>Name</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>001</td>
                      <td>icon</td>
                      <td>Jacob</td>
                    </tr>
                    <tr>
                      <td>001</td>
                      <td>icon</td>
                      <td>Jacob</td>
                    </tr>
                    <tr>
                      <td>001</td>
                      <td>icon</td>
                      <td>Jacob</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-row">
                <div>
                  <h3>All Staffs</h3>
                  <h5>Total 10 Users</h5>
                </div>
              </div>
              <div className="pt-3">
                <table className="table">
                  <thead>
                    <th>ID</th>
                    <th>Picture</th>
                    <th>Name</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>001</td>
                      <td>icon</td>
                      <td>Jacob</td>
                    </tr>
                    <tr>
                      <td>001</td>
                      <td>icon</td>
                      <td>Jacob</td>
                    </tr>
                    <tr>
                      <td>001</td>
                      <td>icon</td>
                      <td>Jacob</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;

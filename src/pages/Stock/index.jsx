import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ENV from "../../config/config.json";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "../../components/Table";
import face18Jpg from "../../assets/images/faces/face18.jpg";

function Stock(props) {
  const a = [1, 2, 3, 4, 5, 6];
  const [tableData, setTableData] = useState([]);
  async function callUserApi() {
    const response = await axios.get(ENV.API_ENDPOINT + "stock", {
      headers: {
        "x-store": localStorage.getItem(ENV.APP_TOKEN)
      }
    });
    return response;
  }
  useEffect(() => {
    callUserApi().then(response => {
      console.log(response.data.payload);
      setTableData(response.data.payload);
      //   console.log(tableData);
    });
    // console.log(data);
  },[]);
  return (
    <div className="content-wrapper">
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white mr-2">
          <div className="d-flex h-100">
              <FontAwesomeIcon
                className="align-self-center mx-auto "
                icon="cubes"
              >
                {" "}
              </FontAwesomeIcon>
            </div>
          </span>
          Stock{""}
          <a href="/admin/stock/create">
            <button className="btn btn-outline-primary ml-2">
              Create Stock
            </button>
          </a>
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
        <div className="col-xl-8 col-lg-7 col-4 grid-margin">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">All Stocks</h1>
              <div className="table-responsive">
                <Table header={["ID", "Name", "Role"]} apiEndpoint="user">
                  {tableData.map(data => (
                    <tr key={data._id}>
                      <td>{data._id}</td>
                      <td>{data.username}</td>
                      <td>{data.role}</td>
                    </tr>
                  ))}
                </Table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5 col-5 grid-margin">
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
                    <tr>
                      <th>ID</th>
                      <th>Picture</th>
                      <th>Name</th>
                    </tr>
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
                    <tr>
                      <th>ID</th>
                      <th>Picture</th>
                      <th>Name</th>
                    </tr>
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
const mapStateToProps = state => ({
  table: state.table
});
export default connect(mapStateToProps)(Stock);

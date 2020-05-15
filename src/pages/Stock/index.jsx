import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "../../components/Table";
// import face18Jpg from "../../assets/images/faces/face18.jpg";
import { Link } from "react-router-dom";
import { Loading } from "../../components";
import { getStock, productEnableLoading } from "../../actions/product-action";

function Stock(props) {
  const tableData = useSelector(state => state.product.stocks);
  const loading = useSelector(state => state.product.loading);
  // const currentUser = useSelector(state => state.user.CURRENT_USER);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productEnableLoading());
    dispatch(getStock());
  }, [dispatch]);
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
          <Link to="/admin/stock-create">
            <button className="btn btn-outline-primary ml-2">
              Create Stock
            </button>
          </Link>
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
        <div className="col grid-margin">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">All Stocks</h1>
              <div className="table-responsive">
                {loading ? (
                  Loading
                ) : (
                  <Table header={["ID", "Quantity", "Date"]} apiEndpoint="user">
                    {tableData &&
                      tableData.map(data => (
                        <tr key={data._id}>
                          <td>{data._id}</td>
                          <td>{data.quantity}</td>
                          <td>{data.create_date}</td>
                        </tr>
                      ))}
                  </Table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col ">
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
        <div className="col">
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

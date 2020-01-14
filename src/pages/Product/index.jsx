import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "../../components/Table";
import face18Jpg from "../../assets/images/faces/face18.jpg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { get_products, productEnableLoading } from "../../actions/product-action.js";
import { Loading } from "../../components/index.js";

function Product() {
  const tableData = useSelector(state => state.product.items);
  const responStatus = useSelector(state => state.product.loading);
  const currentUser = useSelector(state => state.user.CURRENT_USER);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productEnableLoading());
    dispatch(get_products());
  }, [dispatch]);
//  console.log(tableData);
  return (
    <div className="content-wrapper">
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white mr-2">
            <div className="d-flex h-100">
              <FontAwesomeIcon
                className="align-self-center mx-auto "
                icon="shopping-bag"
              >
                {" "}
              </FontAwesomeIcon>
            </div>
          </span>
          Product{""}
          <Link to="/admin/product-create">
            <button className="btn btn-outline-primary ml-2">
              Create Product
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
        <div className="col-xl-8 col-lg-7 col-4 grid-margin">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">All Products</h1>
              <div className="table-responsive">
                {responStatus ? (
                  Loading
                ) : (
                  <>
                    <Table
                      header={["ID", "Name", "Date"]}
                      apiEndpoint="user"
                      responStatus={responStatus}
                    >
                      {tableData && (
                        <>
                          {tableData.map(data => (
                            <Link to={"product-detail/" + data._id}>
                              <tr key={data._id}>
                                <td>{data._id}</td>
                                <td>{data.name}</td>
                                <td>{data.create_date}</td>
                              </tr>
                            </Link>
                          ))}
                        </>
                      )}
                    </Table>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5 col-5 grid-margin">
          <div className="card">
            {currentUser && (
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
                    <h3>{currentUser.username}</h3>
                    <h5>{currentUser.role}</h5>
                  </div>
                </div>
                <div className="pt-3">
                  <div>
                    <hr />
                    <h5>Email</h5>
                    <p className="pl-1">{currentUser.email}</p>
                  </div>
                  <div>
                    <hr />
                    <h5>Phone Number</h5>
                    <p className="pl-1">{currentUser.phone}</p>
                  </div>
                </div>
              </div>
            )}
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
  product: state
});
export default connect(mapStateToProps)(Product);

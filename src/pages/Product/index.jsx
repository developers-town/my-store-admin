import React, { useEffect } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Table from "../../components/Table";
// import face18Jpg from "../../assets/images/faces/face18.jpg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  get_products,
  productEnableLoading,
  modalCreateProduct,
} from "../../actions/product-action.js";
import { Loading, ModalForm } from "../../components/index.js";
import ProductCreate from "./productCreate";
import StockCreate from "../Stock/stockCreate";
import ProdcutUnit from "./productUnit"
import ProdcutCreatedSucess from "./productCreatedSuccess";

function Product() {
  const tableData = useSelector((state) => state.product.items);
  const responStatus = useSelector((state) => state.product.loading);
  const modalStep = useSelector((state) => state.product.modalStep);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productEnableLoading());
    dispatch(get_products());
    (async () => {
      dispatch(await modalCreateProduct("createProduct"));
    })();
  }, [dispatch]);
  console.log(tableData);
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
          {/* <Link to="/admin/product-create"> */}
          <button
            className="btn btn-outline-primary ml-2"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Create Product
          </button>
          {/* </Link> */}
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
      <ModalForm>
        {modalStep === "createProduct" && <ProductCreate />}
        {modalStep === "createProductUnit" && <ProdcutUnit />}
        {modalStep === "createStock" && <StockCreate />}
        {modalStep === "createSuccess" && <ProdcutCreatedSucess/>}
      </ModalForm>
      <div className="row">
        <div className="col grid-margin">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">All Products</h1>
              <div className="table-responsive">
                {responStatus ? (
                  Loading
                ) : (
                  <>
                    <Table
                      header={["ID", "Name", "Date", "Picture"]}
                      apiEndpoint="user"
                      responStatus={responStatus}
                    >
                      {tableData && (
                        <>
                          {tableData.map((data) => (
                            <tr key={data._id}>
                              <td>
                                <Link to={"/admin/product-detail/" + data._id}>
                                  {data._id}
                                </Link>
                              </td>
                              <td>{data.name}</td>
                              <td>{data.create_date}</td>
                              <td>
                                {" "}
                                {data.images && (
                                  <img
                                    className="img-fluid"
                                    src={data.images[0].url}
                                    alt=""
                                  />
                                )}
                              </td>
                            </tr>
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
      </div>
      <div className="row">
        <div className="col">
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
const mapStateToProps = (state) => ({
  product: state,
});
export default connect(mapStateToProps)(Product);

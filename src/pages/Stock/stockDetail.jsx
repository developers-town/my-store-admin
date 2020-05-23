import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LabelInfo, Loading, Modal, FormGroup } from "../../components";
import {
  selectedStock,
  productEnableLoading,
} from "../../actions/product-action";
import { useDispatch, useSelector } from "react-redux";
// import { enableLoading } from "../../actions/user-actions";
// import { useHistory } from "react-router-dom";

const StockDetail = () => {
  const { id } = useParams();
  const stock = useSelector((state) => state.product.stock);
  const loading = useSelector((state) => state.product.loading);
  const dispatch = useDispatch();
  // const history = useHistory();
  const [data, setData] = useState({
    name: "",
    _categories: "",
  });

  useEffect(() => {
    dispatch(productEnableLoading());
    dispatch(selectedStock(id));
  }, [dispatch, id]);

  // console.log(product);

  // assign data to value
  const modelClick = () => {
    if (!loading) {
      setData(stock);
    }
  };

  const onSaveChange = () => {
    // dispatch(updateSlectedUser(id, data));
  };

  console.log(stock);

  return (
    <React.Fragment>
      <div className="card vh-100">
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-account"></i>
            </span>
            Stock Detial{""}
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
                <span></span> Stock detail{" "}
              </li>
            </ul>
          </nav>
        </div>
        {loading ? (
          Loading
        ) : (
          <>
            <div className="row justify-content-center">
              <div className="col-sm-4 p-3 text-center">
                <img
                  className="img-fluid"
                  style={{ width: "200px" }}
                  src="https://static.bhphoto.com/images/images2500x2500/1571097351_1507482.jpg"
                  alt=""
                />
                <p className="text-small pointer mt-2">Change Picture</p>
              </div>
              {stock && (
                <div className="col-sm-8">
                  <LabelInfo label="id" text={stock._id ? stock._id : "N/A"} />
                  <LabelInfo
                    label="name"
                    text={stock.name ? stock.name : "N/A"}
                  />
                  <LabelInfo
                    label="categorie"
                    text={
                      stock._categories[0].name
                        ? stock._categories[0].name
                        : "N/A"
                    }
                  />
                  {/* <LabelInfo label="image" text={stock._images[0]} /> */}
                  <LabelInfo
                    label="create date"
                    text={stock.create_date ? stock.create_date : "N/A"}
                  />
                  <button
                    className="btn btn-danger"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={() => modelClick()}
                  >
                    Edit
                  </button>
                  <Modal
                    title="Edit Stock Info"
                    buttonTitle="Save Change"
                    saveChange={(e) => onSaveChange()}
                  >
                    <form action="">
                      <div className="d-flex">
                        <div className="col-4 overflow-hidden my-3">
                          <img
                            className="img-fluid"
                            src="https://static.bhphoto.com/images/images2500x2500/1571097351_1507482.jpg"
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
                      <FormGroup
                        onInputChange={(e) =>
                          setData({ ...data, name: e.target.value })
                        }
                        validation={data.name.length < 4}
                        label="Name"
                        value={data.name}
                      ></FormGroup>
                      <FormGroup
                        onInputChange={(e) =>
                          setData({ ...data, _categories: e.target.value })
                        }
                        validation={data._categories.length < 4}
                        label="Categories"
                        value={data._categories}
                      ></FormGroup>
                    </form>
                  </Modal>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
};
export default StockDetail;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LabelInfo, Loading, Modal, FormGroup } from "../../components";
import { selectedProduct } from "../../actions/product-action";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";

const ProductDetial = () => {
  const { id } = useParams();
  const product = useSelector(state => state.product.item);
  const loading = useSelector(state => state.product.loading);
  const dispatch = useDispatch();
  // const history = useHistory();
  const [data, setData] = useState({
    name: "",
    _categories: ""
  });

  useEffect(() => {
    dispatch(selectedProduct(id));
  }, [dispatch, id]);

  // assign data to value
  const modelClick = () => {
    if (!loading) {
      setData(product);
    }
  };

  const onSaveChange = () => {
    // dispatch(updateSlectedUser(id, data));
  };

  console.log(product);

  return (
    <React.Fragment>
      <div className="card vh-100">
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-account"></i>
            </span>
            Product Detial{""}
          </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li
                className="breadcrumb-item breadcrumb-link"
                aria-current="page"
              >
                <Link to="/admin/product"> Products </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <span></span> Product detail{" "}
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
              {product && (
                <div className="col-sm-8">
                  <LabelInfo label="id" text={product._id} />
                  <LabelInfo label="name" text={product.name} />
                  <LabelInfo label="categorie" text={product._categories[0]} />
                  <LabelInfo label="image" text={product._images[0]} />
                  <LabelInfo label="create date" text={product.create_date} />
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
                    title="Edit Product Info"
                    buttonTitle="Save Change"
                    saveChange={e => onSaveChange()}
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
                        onInputChange={e =>
                          setData({ ...data, name: e.target.value })
                        }
                        validation={data.name.length < 4}
                        label="Name"
                        value={data.name}
                      ></FormGroup>
                      <FormGroup
                        onInputChange={e =>
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
export default ProductDetial;

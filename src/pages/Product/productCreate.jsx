import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getCategories,
  productEnableLoading,
  // uploadImage,
  createProduct,
} from "../../actions/product-action";
import { FormGroup, Dropdown, Loading } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { actionPost } from "../../services/actionCallApi";
let message = "";

const ProductCreate = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);
  const loading = useSelector((state) => state.product.loading);
  message = useSelector((state) => state.product.message);
  const [image, setImage] = useState(
    "https://static.thenounproject.com/png/340719-200.png"
  );
  const [data, setData] = useState({
    name: "",
    _categorie: [],
    _brand: "",
    _images: [],
  });
  const [optionItem, setOptionItem] = useState([
    { name: "add new category", _id: "0000" },
  ]);
  const [newCategory, setNewCategory] = useState("");
  const [responseStatus, setResponseStatus] = useState({
    status: "",
    type: "",
  });
  const [formData, SetFromData] = useState();

  useEffect(() => {
    dispatch(productEnableLoading());
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(
    function persistForm() {
      if (categories) {
        setOptionItem((e) => [...e, ...categories]);
      }
    },
    [categories]
  );

  const createDataImage = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    SetFromData(formData);
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const onChange = (e) => {
    e.preventDefault();
    createDataImage(e);
  };
  
  useEffect(() => {
    console.log(data);
  }, [data]);

  const createNewProduct = async (e) => {
    e.preventDefault();

    // upload image to server 
    const res = await actionPost("image/upload", formData);
    setData({ ...data, _images: [res.data._id], _categorie: [newCategory] });

    // post create product 
    await dispatch(createProduct(data));

    // check status response 
    if (message === "Success") {
      setResponseStatus({
        status: "Success! Your product have been created",
        type: "alert-success",
      });
    } else {
      setResponseStatus({
        status: "Oops! Please try again.",
        type: "alert-danger",
      });
    }
  };
  return (
    <React.Fragment>
      <div className="content-wrapper">
        <div className={loading ? "d-block" : "d-none"}>{Loading}</div>
        <div className={"alert " + responseStatus.type} role="alert">
          {responseStatus.status}
        </div>
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-account"></i>
            </span>
            Create New Product{""}
          </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li
                className="breadcrumb-item breadcrumb-link"
                aria-current="page"
              >
                <Link to="/admin/product"> Product </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <span></span> Create Product{" "}
              </li>
            </ul>
          </nav>
        </div>
        <div className="row">
          <div className="card col-6">
            <div className="card-body">
              <div className="card-title">
                <h3>Fill out new product</h3>
              </div>
              <form action="">
                <div className="col-4 overflow-hidden my-3">
                  <img className="img-fluid" src={image} alt="" />
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
                    onChange={onChange}
                  />
                </div>
                <div className="flex-grow-1 pr-2">
                  <FormGroup
                    label="Product Name"
                    inputType="text"
                    onInputChange={(e) =>
                      setData({ ...data, name: e.target.value })
                    }
                    validation={data.name.length < 3}
                  ></FormGroup>
                </div>
                <div className="flex-grow-1 pr-2">
                  <FormGroup
                    label="Product Brand"
                    inputType="text"
                    onInputChange={(e) =>
                      setData({ ...data, _brand: e.target.value })
                    }
                    validation={data._brand.length < 3}
                  ></FormGroup>
                </div>
                <div className="flex-grow-1 pr-2">
                  {optionItem && (
                    <Dropdown
                      label="Category"
                      onDropdownChange={(e) =>
                        setData({ ...data, _categorie: [e.target.value] })
                      }
                      onInputChange={(e) => setNewCategory(e.target.value)}
                      dataOptions={optionItem}
                      validation={data._categorie.length < 3}
                      addNewCategory={data._categorie === "add new category"}
                    />
                  )}
                </div>
                <div>
                  <button
                    onClick={createNewProduct}
                    disabled={data.name.length < 3}
                    className="btn btn-block btn-primary"
                  >
                    Create Now
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

export default ProductCreate;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { actionGet, actionPost } from "../../services/actionCallApi";
import { FormGroup, Dropdown } from "../../components";
import Loading from "../../assets/images/rolling-loading.svg";

const ProductCreate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    _categorie: ""
    // _brand: ""
  });
  const [optionItem, setOptionItem] = useState([
    { name: "add new category", _id: "0000" }
  ]);
  const [newCategory, setNewCategory] = useState("");
  const [responseStatus, setResponseStatus] = useState({
    status: "",
    type: ""
  });

  useEffect(() => {
    actionGet("categories").then(response => {
      setOptionItem(e => [...e, ...response.data.payload]);
    });
  }, []);

  const createNewProduct = e => {
    e.preventDefault();
    setIsLoading(true);
    setData({ ...data, _categorie: newCategory });
    actionPost("product", data)
      .then(response => {
        setIsLoading(false);
        setResponseStatus({
          status: "Product have been created!",
          type: "alert-success"
        });
        console.log(response);
      })
      .catch(ex => {
        setIsLoading(false);
        setResponseStatus({
          status: "Error! Please try again",
          type: "alert-danger"
        });
        console.log(ex.response);
        // throw new Error(ex);
      });
  };
  return (
    <React.Fragment>
      <div
        className={isLoading ? "fixed-top vh-100 d-flex" : "d-none"}
        style={{ backgroundColor: "rgba(255, 255, 255, .5)" }}
      >
        <img className="align-self-center mx-auto" src={Loading} alt="" />
      </div>
      <div className="content-wrapper">
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
              <div>
                <h3>Fill out new product</h3>
              </div>
              <form action="">
                <div className="flex-grow-1 pr-2">
                  <FormGroup
                    label="Product Name"
                    onInputChange={e =>
                      setData({ ...data, name: e.target.value })
                    }
                    validation={data.name.length < 3}
                  ></FormGroup>
                </div>
                <div className="flex-grow-1 pr-2">
                  <Dropdown
                    label="Category"
                    onDropdownChange={e =>
                      setData({ ...data, _categorie: e.target.value })
                    }
                    onInputChange={e => setNewCategory(e.target.value)}
                    dataOptions={optionItem}
                    validation={newCategory.length < 3}
                    addNewCategory={data._categorie === "add new category"}
                  />
                </div>
                <div>
                  <button
                    onClick={createNewProduct}
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

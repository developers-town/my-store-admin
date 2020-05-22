import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import {
  getCategories,
  productEnableLoading,
  createProduct,
  getBrands,
  buttonLoading,
} from "../../actions/product-action";
import { FormGroup, Dropdown, BrandDropdown, Loading } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { actionPost } from "../../services/actionCallApi";

const ProductCreate = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);
  const brands = useSelector((state) => state.product.brands);
  const loading = useSelector((state) => state.product.buttonLoading);
  const [image, setImage] = useState(
    "https://static.thenounproject.com/png/340719-200.png"
  );
  const [data, setData] = useState({
    name: "",
    _categories: [],
    _brand: "",
    _images: [],
  });
  const [optionItem, setOptionItem] = useState([
    { name: "add new category", _id: "0000" },
  ]);
  const [newCategory, setNewCategory] = useState({
    name: "",
  });
  const [formData, SetFromData] = useState();

  useEffect(() => {
    dispatch(productEnableLoading());
    dispatch(getCategories());

    (async () => {
      dispatch(await getBrands());
    })();
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

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const createNewProduct = async (e) => {
    e.preventDefault();
    (async () => {
      dispatch(await buttonLoading(true));
    })();
    const res = await actionPost("image/upload", formData);
    let createdCategory = "";
    if (newCategory.name) {
      const response = await actionPost("categories", newCategory);
      createdCategory = response.data.payload._id;
    }

    const body = {
      ...data,
      _images: [res.data._id],
      _categories: newCategory.name ? [createdCategory] : data._categories,
    };

    dispatch(await createProduct(body));
  };
  return (
    <React.Fragment>
      <div className="content-wrapper">
        <div className="card-body">
          <div className="card-title">
            <h3>Fill out new product</h3>
          </div>
          <form action="">
            <div className="col-4 overflow-hidden my-3">
              <img className="img-fluid" src={image} alt="" />
            </div>
            <div className="align-self-end pb-2 flexed">
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
              <BrandDropdown
                label="Brand"
                dataOptions={brands}
                onDropdownChange={(e) =>
                  setData({ ...data, _brand: e.target.value })
                }
              />
            </div>
            <div className="flex-grow-1 pr-2">
              {optionItem && (
                <Dropdown
                  label="Category"
                  onDropdownChange={(e) =>
                    setData({ ...data, _categories: [e.target.value] })
                  }
                  onInputChange={(e) =>
                    setNewCategory({ ...newCategory, name: e.target.value })
                  }
                  dataOptions={optionItem}
                  // validation={data._categories[0].length < 3}
                  addNewCategory={data._categories[0] === "0000"}
                />
              )}
            </div>
            <div>
              <button
                onClick={createNewProduct}
                disabled={data.name.length < 3}
                className="btn btn-block btn-primary"
              >
                {loading ? Loading : "Create Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCreate;

import React, { useEffect, useState } from "react";
import { FormGroup, Loading } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { createProductUnit, buttonLoading } from "../../actions/product-action";

export default function ProductUnit() {
  const dispatch = useDispatch();
  const productCreated = useSelector((state) => state.product.productCreated);
  const loading = useSelector((state) => state.product.buttonLoading);
  const [data, setData] = useState({
    _product: "",
    quantity: "",
    max_order: "",
    price: "",
    name: "",
  });

  useEffect(
    function persistForm() {
      if (productCreated) {
        setData((e) => ({ ...e, _product: productCreated._id }));
      }
    },
    [productCreated]
  );

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const handleCreateClick = async (e) => {
    e.preventDefault();
    (async () => {
      dispatch(await buttonLoading(true));
      dispatch(await createProductUnit(data));
    })();
  };
  return (
    <React.Fragment>
      <div className="content-wrapper">
        <div className="card-body">
          <div>
            <h3>Fill out prodcut unit</h3>
          </div>
          <form action="">
            <div className="flex-grow-1 pr-2">
              <FormGroup
                label="Quantity"
                inputType="number"
                placeholder="Quantity"
                onInputChange={(e) =>
                  setData({ ...data, quantity: e.target.value })
                }
                validation={data.quantity.length < 1}
              ></FormGroup>
              <FormGroup
                label="Max-order"
                inputType="number"
                placeholder="Max-order"
                onInputChange={(e) =>
                  setData({ ...data, max_order: e.target.value })
                }
                validation={data.max_order.length < 1}
              ></FormGroup>
              <FormGroup
                label="Price"
                inputType="number"
                placeholder="Price"
                onInputChange={(e) =>
                  setData({ ...data, price: e.target.value })
                }
                validation={data.price.length < 1}
              ></FormGroup>
              <FormGroup
                label="Name"
                inputType="text"
                placeholder="Name"
                onInputChange={(e) =>
                  setData({ ...data, name: e.target.value })
                }
                validation={data.name.length < 3}
              ></FormGroup>
            </div>
            <div>
              <button
                onClick={handleCreateClick}
                disabled={
                  data.quantity.length < 1 &&
                  data.max_order.length < 1 &&
                  data._product.length < 1 &&
                  data.price.length < 1 &&
                  data.name.length < 3
                }
                className="btn btn-block btn-primary"
              >
                {loading ? Loading : "Create Product Unit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

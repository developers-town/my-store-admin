import React, { useState, useEffect } from "react";
import { FormGroup, Loading } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { createStock, buttonLoading } from "../../actions/product-action";
// import { useHistory } from "react-router-dom";

const CreateStock = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const productUnitCreated = useSelector(
    (state) => state.product.productUnitCreated
  );
  const productCreated = useSelector((state) => state.product.productCreated);
  const loading = useSelector((state) => state.product.buttonLoading);
  // const stockCreated = useSelector((state) => state.product.stockCreated);
  const [data, setData] = useState({
    _product: "",
    _product_unit: "",
    quantity: "",
  });
  useEffect(
    function persistForm() {
      if (productCreated) {
        setData((e) => ({ ...e, _product: productCreated._id }));
      }
      if (productUnitCreated) {
        setData((e) => ({ ...e, _product_unit: productUnitCreated._id }));
      }
    },
    [productCreated, productUnitCreated]
  );

  // useEffect(() => {
  //   console.log(stockCreated);
  // }, [stockCreated]);

  const handleCreateClick = async (e) => {
    e.preventDefault();
    (async () => {
      dispatch(await buttonLoading(true));
      dispatch(await createStock(data));
    })();
  };

  return (
    <React.Fragment>
      <div className="content-wrapper">
        <div className="card-body">
          <div>
            <h3>Fill out new stock</h3>
          </div>
          <form action="">
            <div className="flex-grow-1 pr-2">
              <FormGroup
                label="Stock Quantity "
                inputType="number"
                placeholder="Quantity"
                onInputChange={(e) =>
                  setData({ ...data, quantity: e.target.value })
                }
                validation={data.quantity.length < 1}
              ></FormGroup>
            </div>
            <div>
              <button
                onClick={handleCreateClick}
                className="btn btn-block btn-primary"
                disabled={data.quantity.length < 1}
              >
                {loading ? Loading : "Create Stock"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CreateStock;

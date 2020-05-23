import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { modalCreateProduct } from "../../actions/product-action.js";

const ProdcutCreatedSucess = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const message = useSelector((state) => state.product.message);
  const stockCreated = useSelector((state) => state.product.stockCreated);

  useEffect(() => {
    console.log(message);
  }, [message]);

  const onCreate = (e) => {
    e.preventDefault();
    (async () => {
      dispatch(await modalCreateProduct("createProduct"));
    })();
  };
  const onPreview = (e) => {
    e.preventDefault();
    history.push("/admin/product-detail/" + stockCreated._product);
  };
  return (
    <React.Fragment>
      <div className="content-wrapper">
        {message === "Success" ? (
          <div className="card-body">
            <div className="card-title text-center pb-5">
              <h1>Congratulations!</h1>
              <br />
              <h3>You product has been created!</h3>
            </div>
            <form action="">
              <button className="btn btn-block btn-primary" onClick={onCreate}>
                Create More
              </button>
              <button
                className="btn btn-block btn-info"
                onClick={onPreview}
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                Preview
              </button>
            </form>
          </div>
        ) : (
          <div className="card-body">
            <div className="card-title text-center pb-5">
              <h1>Failed!</h1>
              <br />
              <h3>Please try agian or contact to adminstrator!</h3>
            </div>
            <form action="">
              <button className="btn btn-block btn-danger" onClick={onCreate}>
                Try Again
              </button>
            </form>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
export default ProdcutCreatedSucess;

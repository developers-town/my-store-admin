import React from "react";
const labelInfo = props => {
  return (
    <>
      <div className="row m-3">
        <div className="col-xs-4 col-lg-4 ">
          <label>{props.label}</label>
        </div>
        <div className="col-xs-6 col-lg-6">
          <label className="font-weight-bold">: {props.text}</label>
        </div>
      </div>
    </>
  );
};

export default labelInfo;

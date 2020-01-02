import React from "react";
import { connect } from "react-redux";
// import { setUser } from "../actions/user-actions";
const FormGroup = props => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="">
          <h6>{props.label}</h6>
        </label>
        <input
          onChange={props.onInputChange}
          className="form-control"
          value={props.value || ""}
          type={props.inputType}
          placeholder={props.placeholder}
        />
        <span className="text-danger" style={{ fontSize: "0.6rem" }}>
          {props.validation ? "Please fill " + props.label : ""}
        </span>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.user
});
const mapActionsToProps = {
  // onSetUsername: setUser
};

export default connect(mapStateToProps, mapActionsToProps)(FormGroup);

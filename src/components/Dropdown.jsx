import React from "react";
import { connect } from "react-redux";
// import { setUser } from "../actions/user-actions";
const Dropdown = props => {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="">
          <h6>{props.label}</h6>
        </label>
        <select
          className="form-control"
          defaultValue=""
          onChange={props.onDropdownChange}
        >
          <option value="">
          selection category
          </option>
          {props.dataOptions.map(item => (
            <option key={item._id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        {props.addNewCategory ? (
          <div>
            <br />
            <input
              onChange={props.onInputChange}
              className="form-control"
              type="text"
              placeholder={props.label}
            />
          </div>
        ) : (
          ""
        )}
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

export default connect(mapStateToProps, mapActionsToProps)(Dropdown);

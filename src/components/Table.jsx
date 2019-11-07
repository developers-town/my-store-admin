import React from "react";
import { connect } from "react-redux";
import { setTable } from "../actions/table-actions";
import rolling_loading from "../assets/images/rolling-loading.svg";

const formLoading = (
  <img
    className="img-fluid"
    style={{ width: "50px" }}
    src={rolling_loading}
    alt="Loading"
  />
);

const Table = props => {
  return (
    <React.Fragment>
      <table className="table w-100">
        <thead>
          <tr>
            {props.header.map(th => (
              <th key={th}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>{props.responStatus ? props.children : formLoading}</tbody>
      </table>
    </React.Fragment>
  );
};
const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
  onSetTable: setTable
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Table);

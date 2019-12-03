import React from "react";
import { connect } from "react-redux";

const UserDetail = props => {
  return (
    <React.Fragment>
      <div>
        <h1>UserDetail</h1>
        {props.product}
      </div>
    </React.Fragment>
  );
};
const mapActionsToProps = () => {};
const mapStateToProps = state => ({
  product: state.product,
  user: state.user
});
export default connect(mapStateToProps, mapActionsToProps)(UserDetail);

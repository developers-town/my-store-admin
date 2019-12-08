import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LabelInfo, Loading } from "../../components";

const UserDetail = props => {
  const user = props.user.SELECTED_USER || { undefind: true };
  const [isExpired, setIsExpired] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (user.undefind) {
      setIsExpired(true);
      handleLoading();
    } else {
      setIsExpired(false);
      handleLoading();
    }
  }, [user]);
  const handleLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };
  return (
    <React.Fragment>
      <div className="card shadow-lg">
        <div className="page-header">
          <h3 className="page-title">
            <span className="page-title-icon bg-gradient-primary text-white mr-2">
              <i className="mdi mdi-account"></i>
            </span>
            User Detial{""}
          </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li
                className="breadcrumb-item breadcrumb-link"
                aria-current="page"
              >
                <Link to="/admin/user"> Users </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <span></span> User detail{" "}
              </li>
            </ul>
          </nav>
        </div>
        {isLoading ? (
          Loading
        ) : (
          <>
            {isExpired ? (
              <div className="px-3">
                <div className="card shadow-lg bg-danger">
                  <div className="card-body p-3">
                    <p className="p-0 m-0">
                      Information user have expired. Please go to{" "}
                      <Link to="/admin/user">User</Link> than select again{" "}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="row justify-content-center">
              <div className="col-sm-4 p-3 text-center">
                <img
                  className="img-fluid"
                  style={{ width: "100px" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQx5bOc3zvYHup1gvypL_x38LRz015grCV9StqTArIZ-u6afAn0"
                  alt=""
                />
                <p className="text-small pointer mt-2">change profile</p>
              </div>
              <div className="col-sm-8">
                <LabelInfo label="username" text={user.username} />
                <LabelInfo label="id" text={user._id} />
                <LabelInfo label="first name" text={user.first_name} />
                <LabelInfo label="last name" text={user.last_name} />
                <LabelInfo label="email" text={user.email} />
                <LabelInfo label="create date" text={user.create_date} />
                <LabelInfo label="role" text={user.role} />
              </div>
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = state => ({
  product: state.product,
  user: state.user
});
export default connect(mapStateToProps)(UserDetail);

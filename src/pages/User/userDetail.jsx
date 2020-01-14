import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LabelInfo, Loading, Modal, FormGroup } from "../../components";
import { selectedUser, updateSlectedUser, enableLoading } from "../../actions/user-actions";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  const user = useSelector(state => state.user.item);
  const loading = useSelector(state => state.user.loading);
  const dispatch = useDispatch();
  // const history = useHistory();
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    role: ""
  });

  useEffect(() => {
    dispatch(enableLoading())
    dispatch(selectedUser(id));
  }, [dispatch, id]);

  // assign data to value
  const modelClick = () => {
    if (!loading) {
      setData(user);
    }
  };

  const onSaveChange = () => {
    dispatch(updateSlectedUser(id, data));
  };

  // console.log(data);
  
  return (
    <React.Fragment>
      <div className="card vh-100">
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
        {loading ? (
          Loading
        ) : (
          <>
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
              {user && (
                <div className="col-sm-8">
                  <LabelInfo label="id" text={user._id} />
                  <LabelInfo label="username" text={user.username} />
                  <LabelInfo label="first name" text={user.first_name} />
                  <LabelInfo label="last name" text={user.last_name} />
                  <LabelInfo label="email" text={user.email} />
                  <LabelInfo label="create date" text={user.create_date} />
                  <LabelInfo label="role" text={user.role} />
                  <button
                    className="btn btn-danger"
                    type="button"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={() => modelClick()}
                  >
                    Edit
                  </button>
                  <Modal
                    title="Edit User Info"
                    buttonTitle="Save Change"
                    saveChange={e => onSaveChange()}
                  >
                    <form action="">
                      <div className="d-flex">
                        <div className="col-4 overflow-hidden my-3">
                          <img
                            className="img-fluid"
                            src="https://lakewangaryschool.sa.edu.au/wp-content/uploads/2017/11/placeholder-profile-sq.jpg"
                            alt=""
                          />
                        </div>
                        <div className="align-self-end pb-2">
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
                          />
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="flex-grow-1 pr-2">
                          <FormGroup
                            onInputChange={e =>
                              setData({ ...data, first_name: e.target.value })
                            }
                            label="First Name"
                            value={data.first_name}
                            validation={data.first_name.length < 3}
                          ></FormGroup>
                        </div>
                        <div className="flex-grow-1 pl-2">
                          <FormGroup
                            onInputChange={e =>
                              setData({ ...data, last_name: e.target.value })
                            }
                            validation={data.last_name.length < 3}
                            value={data.last_name}
                            label="Last Name"
                          ></FormGroup>
                        </div>
                      </div>
                      <div className="d-flex">
                        <div className="flex-grow-1 pr-2">
                          <FormGroup
                            validation={data.username.length < 3}
                            label="Username"
                            value={data.username}
                            onInputChange={e =>
                              setData({ ...data, username: e.target.value })
                            }
                          ></FormGroup>
                        </div>
                        <div className="flex-grow-1 pl-2">
                          <FormGroup
                            onInputChange={e =>
                              setData({ ...data, email: e.target.value })
                            }
                            validation={
                              !data.email.match(
                                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                              )
                            }
                            label="Email"
                            value={data.email}
                            inputType="email"
                          ></FormGroup>
                        </div>
                      </div>
                      <FormGroup
                        onInputChange={e =>
                          setData({ ...data, password: e.target.value })
                        }
                        // validation={data.password.length < 4}
                        label="Password"
                        placeholder="****************"
                        inputType="password"
                      ></FormGroup>
                    </form>
                  </Modal>
                    
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </React.Fragment>
  );
};
export default UserDetail;

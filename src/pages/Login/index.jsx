import React, { useState, useEffect } from "react";
import { loginUser, enableLoading } from "../../actions/user-actions";
import login1 from "../../assets/images/login/login1.jpg";
import Loading from "../../assets/images/rolling-loading.svg";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginFail = useSelector(state => state.user.login_error);
  const isLoading = useSelector(state => state.user.loading);
  const logged = useSelector(state => state.user.logged);
  const dispatch = useDispatch();
  const history = useHistory();

  const authLogin = async e => {
    e.preventDefault();
    dispatch(enableLoading());
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (logged) history.push("admin/dashboard");
  }, [logged, history]);
  return (
    <div>
      <div
        className={isLoading ? "fixed-top vh-100 d-flex" : "d-none"}
        style={{ backgroundColor: "rgba(255, 255, 255, .5)" }}
      >
        <img className="align-self-center mx-auto" src={Loading} alt="" />
      </div>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex flex-row align-items-center justify-content-center auth">
            <div className="d-flex flex-row justify-content-center shadow col-8 p-0 m-0 rounded-lg overflow-hidden">
              <div
                style={{
                  backgroundImage: `url(${login1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  margin: "0",
                  padding: "0"
                }}
                className="col-lg-6"
              >
                <div style={{ height: "80vh" }}></div>
              </div>
              <div style={{}} className="col-lg-6">
                <div
                  style={{ paddingTop: "15vh" }}
                  className="text-center"
                ></div>
                <div className="text-center pt-4">
                  <p style={{ color: "#888888", fontSize: "2vh" }}>
                    Welcome Back To RumLow
                  </p>
                </div>
                <div className="text-center d-none">
                  <p style={{ color: "#888888", fontSize: "1.6vh" }}>
                    Login To Continue
                  </p>
                </div>
                <div className="col-10 mx-auto">
                  <form>
                    <div className="my-3">
                      <label style={{ color: "#888888", fontSize: "2vh" }}>
                        Email
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="my-3">
                      <label style={{ color: "#888888", fontSize: "2vh" }}>
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                      />
                    </div>
                    <div
                      className={
                        loginFail ? "m-0 p-0 d-block" : "m-0 p-0 d-none"
                      }
                    >
                      <p className="text-danger">
                        Your Credentials did not match our records
                      </p>
                    </div>
                    <div className="mt-5">
                      <button
                        onClick={authLogin}
                        className="btn btn-gradient-primary btn-rounded col-12"
                      >
                        Login
                      </button>
                    </div>
                    <div>
                      <hr />
                    </div>
                  </form>
                  <div className="d-flex flex-row justify-content-between">
                    <p>Forgot Password?</p>
                    <a href="#/">Contact Admin</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- content-wrapper ends --> */}
        </div>
        {/* <!-- page-body-wrapper ends --> */}
      </div>
    </div>
  );
}
export default Login;

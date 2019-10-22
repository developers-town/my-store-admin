import React from "react";
import login1 from "../../assets/images/login/login1.jpg";
import login2 from "../../assets/images/login/login2.jpg";

function Login() {
  return (
    <div>
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
                <div style={{ paddingTop: "15vh" }} className="text-center">
                  <h1>RumLow</h1>
                </div>
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
                      />
                    </div>
                    <div className="m-0 p-0">
                      <p className="text-danger">
                        Your Credentials did not match our records
                      </p>
                    </div>
                    <div className="mt-5">
                      <button className="btn btn-gradient-primary btn-rounded col-12">
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

import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
            Copyright © 2020
            <a href="https://nexious.co/" target="blank">
              Nexious.co
            </a>
            . All rights reserved.
          </span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
            Made with Headache <i className="mdi mdi-heart text-danger"></i>
          </span>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;

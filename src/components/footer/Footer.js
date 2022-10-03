import React from "react";
import { useState } from "react";

const Footer = () => {
    const [email,setEmail] = useState("");
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4 pb-0">
        <form action="">
          <div className="row">
            <div className="col-auto mb-4 mb-md-0">
              <p className="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>
            <div className="col-md-5 col-12 mb-4 mb-md-0">
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form5Example25"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label" htmlFor="form5Example25">
                  Email address
                </label>
              </div>
            </div>
            <div className="col-auto mb-4 mb-md-0">
              <button type="submit" className="btn btn-primary mb-4">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="text-center p-3 bg-dark">
        <a className="text-light" href="https://mdbootstrap.com/">
          © 2020 Copyright: Ismoilov Shakhboz
        </a>
      </div>
    </footer>
  );
};

export default Footer;

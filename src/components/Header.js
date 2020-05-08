import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h3>
          <Link to={"/"} className="text-light">
            Crud list with React, Redux, REST API and Axios
          </Link>
        </h3>
      </div>

      <Link
        to={"/items/new"}
        className="btn btn-danger new-post d-block d-md-inline-block"
      >
        Add item &#43;
      </Link>
    </nav>
  );
};

export default Header;

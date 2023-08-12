import React from "react";
import { Link } from "react-router-dom";

const Subnav = () => {
  return (
    <nav className="sticky-subnav">
      <div className=" card subnav ">
        <div
          className="card-body"
          style={{ color: "white", display: "flex", paddingBottom: "0" }}
        >
        <Link to={'/write'}>

          &nbsp;&nbsp;
          <h5 className="card-title"> Write your new Post . . . . 
          &nbsp;&nbsp;
          <i className="fa-regular fa-pen-to-square p-1"></i></h5>
        </Link>
        </div>
        <hr />
        <div className="card-header d-flex justify-content-center">
          Write anything you wish ! (Click to create new post){" "}
        </div>
      </div>
    </nav>
  );
};

export default Subnav;

import React from "react";

const Spinner = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div
        className="spinner-grow mx-3 bg-primary"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      ></div>
      <div
        className="spinner-grow mx-3 bg-info"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      ></div>
      <div
        className="spinner-grow mx-3 bg-success"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      ></div>
      <div
        className="spinner-grow mx-3 bg-warning"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      ></div>
      <div
        className="spinner-grow mx-3 bg-danger"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;

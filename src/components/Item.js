import React from "react";

const Item = (props) => {
  let { title, description, imgUrl, newsUrl, name, time } = props;
  return (
    <>
      <div className="container my-4">
        <div className="card">
          <img
            className="card-img-top"
            src={
              !imgUrl
                ? "https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                : imgUrl
            }
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
            <hr className="dropdown-divider" />
            <p className="card-text">
              <small className="text-muted">
                By {name} on {new Date(time).toLocaleDateString()} at{" "}
                {new Date(time).toLocaleTimeString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;

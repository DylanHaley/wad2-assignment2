import React from "react";

const Header = ({ title, numMovies }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <h2>
          {`${title}  `}
          <span className="badge badge-pill badge-success bg-dark">{numMovies}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;
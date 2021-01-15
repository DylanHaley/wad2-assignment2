import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import "./siteHeader.css";

const SiteHeader = () => {
  return (
    <nav className="navbar  navbar-light fixed-top bg bg-dark ">
      <nav className="navbar-brand text-white">
      </nav>
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/movies/upcoming">
              Upcoming
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/movies/nowplaying">
              Now PLaying
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-danger" to="/movies/latest">
              Latest
            </Link>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default SiteHeader;
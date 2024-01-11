
import React from "react";
import "./Navbar1.css";
import PropTypes from "prop-types";
import { Link  } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          {props.mainTitle}
          </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {props.title}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {" "}
              {props.title2}
            </Link>
          </li>
        </ul>

        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {props.toggle}
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "set title here",
  title2: "about",
};

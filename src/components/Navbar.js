
import React from "react";
import "./Style.css";
import PropTypes from "prop-types";
// import { Link  } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
          <a className="navbar-brand" href="/">
          {props.mainTitle}
          </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="/">
              {props.title}
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/about">
              {" "}
              {props.title2}
            </a>
          </li> */}
        </ul>

        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            id=""
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
          <button className="btn btn-outline-success" id="search" type="submit">
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

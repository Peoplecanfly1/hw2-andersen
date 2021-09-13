import React from "react";
import { NavLink } from "react-router-dom";

const NavigationView = () => {
  return (
    <header className="d-flex justify-content-center py-3 mb-4 border-bottom">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            exact
            className="nav-link"
            activeClassName="active"
          >
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default NavigationView;

import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <NavLink to="/">
            <span className="navbar-brand mb-0 text-white fs-1">
              Мой дневник
            </span>
          </NavLink>
          <div className="ms-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  ♥ фильмы{" "}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/books">
                  ♥ книги
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/music">
                  ♥ песни
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/portfolio">
                  портфолио
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

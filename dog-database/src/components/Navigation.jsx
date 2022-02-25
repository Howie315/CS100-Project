import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';


function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Dog DataBase
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/DogListings">
                  Dog Listings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/AddDog">
                  Dog Add
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/RemoveDog">
                  Dog Remove
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
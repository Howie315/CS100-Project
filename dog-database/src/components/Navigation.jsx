import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';


function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
    
            <img src = {require("./download.png")}
            //width = "70"
            height = "70"/>
        <div className="container">
          
          <NavLink className="navbar-brand" to="/">
            <h1 class = "font-weight-normal-bold">Dog Database</h1>
          </NavLink>
          
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                <h1 class = "font-weight-normal-bold">| Home |</h1>
                  <span className="sr-only">(current)</span>
                </NavLink>
                
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                <h1 class = "font-weight-normal-bold">About |</h1>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/DogListings">
                <h1 class = "font-weight-normal-bold">DogListings |</h1>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/AddDog">
                <h1 class = "font-weight-normal-bold">Dog Add |</h1>
                </NavLink> 
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/RemoveDog">
                <h1 class = "font-weight-normal-bold">Dog Remove |</h1>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
       
            <img src = {require("./download.png")}
            //width = "70"
            height = "70"/>
      </nav>
    </div>
  );
}

export default Navigation;
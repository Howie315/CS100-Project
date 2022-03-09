import React from "react";
import {NavLink} from "react-router-dom";
import background from "./dogbone.png";


function Home() {
  return (
  <div style= {{
    width: 1920,
    height: 800,
    backgroundImage: `url(${background})` }}>
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-11">
          <h1 class="font-weight-normal-bold"
          style = {{ color: "white" }}
          > Home</h1>
            <p style = {{ color: "white" }}>
              Welcome to Dog DataBase, the site to browse your furry friends! 
            </p>
            <img src = {require("./icon.png")}
            width = "575"
            height = "550"/>
              <NavLink className="nav-link" to="/DogListings">
              <h1 Button = "font-weight-normal-bold"
              style = {{ color: "white" }}
              > Start Here </h1>
              </NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Home;
import React from "react";
import {NavLink} from "react-router-dom"

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-11">
          <h1 class="font-weight-normal-bold"> Home</h1>
            <p>
              Welcome to Dog DataBase, the site to browse your furry friends! 
            </p>
            <img src = {require("./icon.png")}
            width = "575"
            height = "550"/>
            <nav className="navbar navbar-expand navbar-dark">
             <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/DogListings">
                  <h1 class = "font-weight-normal-bold">| Start Here |</h1>
                  
                  </NavLink>
                </li>
             </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
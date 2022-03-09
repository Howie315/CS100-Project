import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

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
            <StyleButton>
            <NavLink className = "nav-link" to="/DogListings"><button>
              Start Here 
            </button>
            </NavLink>
            </StyleButton>     
          </div>
        </div>
      </div>
    </div>
  );
}
const StyleButton = styled.a`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;


export default Home;
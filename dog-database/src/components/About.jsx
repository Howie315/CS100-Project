import React from "react";
import background from "./grass.png"

function About() {
  return (
    <div style= {{
      width: 1920,
      height: 800,
      backgroundImage: `url(${background})` }}>
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
         
            <img src = {require("./dogadopt.png")}
            width = "575"
            height = "550" />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-normal-bold"
            style = {{ color: "purple" }}
            >About
            </h1>
            <p style = {{ color: "purple" }}> 
             Dog DataBase is an online dog center where users can access and and add, remove, or learn about a dog. We are driven by the growing number of dogs 
             occupying animal shelters and wish to find homes for our canine companions. Here, you can browse and pick from a variety of dogs to adopt. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default About;
import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
<<<<<<< HEAD
         
            <img src = {require("./dogadopt.png")}
=======
         
            <img src = {require("./dogadopt.png")}
>>>>>>> ahoan055/Home-Page
            width = "575"
            height = "550" />
          </div>
          <div class="col-lg-5">
          <h1 class="font-weight-normal-bold">About</h1> 
            <p>
            Dog DataBase is an online dog center where users can access and and add, remove, or learn about a dog. We are driven by the growing number of dogs 
             occupying animal shelters and wish to find homes for our canine companions. Here, you can browse and pick from a variety of dogs to adopt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
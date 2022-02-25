import React from "react";

function About() {
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-lighgt">About</h1>
            <p>
             Dog database is a project we constructed for dog lovers everywhere.
             Our goal is make easy to adopt or purchase dogs. We do this with 
             are user friendly database that allows you to make informed descions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
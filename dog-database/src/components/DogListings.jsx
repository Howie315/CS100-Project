import React from "react";
import background from "./dogbone.png";

function DogListings() {
  return (
    <div style= {{
      width: 1920,
      height: 849,
      backgroundImage: `url(${background})` }}>
    <div className="DogListings">
      <div class="container">
        <div class="row align-items-center my-0">
          <div class="col-lg-7">
      
          </div>
          <div class="col-lg-5">

            <h1 class="font-weight-normal-bold">Dog Listings</h1>
            <p>
             Here is a list of dogs that are up for adoption.  
            </p>
            <h1 class="font-weight-light">Dog Listings</h1>
           

          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default DogListings;
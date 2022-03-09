import React from "react";
import background from "./dogbone.png";
import DogListingsTiles from "./DogListingsTiles";
import DogPost from "./DogPost";
import Post from "./Post";
import PostTile from "./PostTile";

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
          <div class="col-lg-12">
          
            <h1 class="font-weight-light">DogListings</h1>
        <DogPost/>
          </div>
        </div>
      </div>

    </div>
  );
}

export default DogListings;
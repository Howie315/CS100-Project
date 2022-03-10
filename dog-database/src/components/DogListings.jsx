import React from "react";
import DogPost from "./DogPost";
import Post from "./Post";
import PostTile from "./PostTile";

function DogListings() {
  return (
    <div className="DogListings">
      <div class="container">
        <div class="row align-items-center my-0">
          <div class="col-lg-7">
          </div>
          <div class="col-lg-5.5">

            <h1 class="font-weight-normal-bold">Dog Listings</h1>
            <DogPost/>

            
          </div>
        </div>
      </div>

    </div>
  );
}

export default DogListings;
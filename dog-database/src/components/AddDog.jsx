import React from "react";
import AddDogClass from "./AddDogClass";
import DogPost from "./DogPost";

function AddDog() {
  return (
    <div className="AddDog">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          </div>
          </div>

        

          <div class="col-lg-12">
            <h1 class="font-weight-light">AddDog</h1>

            <p>
             Add your dogs here.
            </p>
            <DogPost/>
          </div>
        </div>
      </div>
   
  );
}


export default AddDog;
import React from "react";

function AddDog() {
  return (
    <div className="AddDog">
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
            <h1 class="font-weight-normal-bold">AddDog</h1>
            <p>
             Add your dogs here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDog;
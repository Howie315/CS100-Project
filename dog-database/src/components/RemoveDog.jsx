import React from "react";

function RemoveDog() {
  return (
    <div className="RemoveDog">
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
            <h1 class="font-weight-normal-bold">RemoveDog</h1>
            <p>
             This is where you remove a dog from our list. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemoveDog;
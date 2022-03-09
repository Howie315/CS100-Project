import React from "react";

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
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
             src = {require("./icon.png")}
              width = "575"
              height = "550"
              alt=""
            />
          
      
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
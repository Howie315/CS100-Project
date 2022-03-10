import React from "react";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-11">
          <h1 class="font-weight-normal-bold"
          style = {{ color: "black" }}
          > Home</h1>
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
const StyleButton = styled.a`
display:block;
padding-left:0%;
button {
    position: relative;
    //display:block;
    height: 45px;
    width: 150px;
    margin: 10px 7px;
    padding: 5px 5px;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 2px;
    color: #383736;
    border: 2px #383736 solid;
    border-radius: 4px;
    text-transform: uppercase;
    outline: 0;
    overflow:hidden;
    background: white;
    color: black;
    z-index: 1;
    cursor: pointer;
    transition:         0.08s ease-in;
    -o-transition:      0.08s ease-in;
    -ms-transition:     0.08s ease-in;
    -moz-transition:    0.08s ease-in;
    -webkit-transition: 0.08s ease-in;
}

`;

export default Home;
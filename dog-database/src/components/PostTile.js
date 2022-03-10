import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import instance from "../axios-conn";
import DogPost from "./DogPost";
import { storage, app } from "../firebase";

class PostTile extends Component {
  handleRemove = (id) => {
    instance.delete(`posts/${id}.json`).then((res) => {
      console.log(res);
      console.log(res.data);
    });

    //     .catch((err) => console.log(err));
  };

  render() {
    return (
      <StyledPostTile>
        <h1>{this.props.theName}</h1>
        <div class="container">
          <div class="row">
            <div class="col-md-5 img img-3 d-flex justify-content-center align-items-center">
              <div class="img-with-text">
                <img src={this.props.file} width="500" height="500" />
                <font size="6">
                  <p>{this.props.breed}</p>
                  <p>{this.props.gender}</p>
                  <p>{this.props.age}</p>
                </font>
              </div>
            </div>

            <div class="col-md-7 wrap-about pl-md-5 ">
              <div class="heading-section">
                <h2 class="mb-4">Dog</h2>
              </div>
              <font size="6">
                <p>{this.props.description}</p>
              </font>
            </div>
          </div>
        </div>

        <div class="col-lg-7">{this.props.file}</div>

        <form onSubmit={this.handleRemove}>
          <button className="arrow" type="submit">
            DELETE
          </button>
        </form>
      </StyledPostTile>
    );
  }
}

const StyledPostTile = styled.a`
  display: block;
  button {
    position: relative;
    //display:block;
    height: 35px;
    width: 100px;
    margin: 10px 7px;
    padding: 5px 5px;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 3px;
    color: #383736;
    border: 2px #383736 solid;
    border-radius: 4px;
    text-transform: uppercase;
    outline: 0;
    overflow: hidden;
    background: none;
    z-index: 1;
    cursor: pointer;
    transition: 0.08s ease-in;
    -o-transition: 0.08s ease-in;
    -ms-transition: 0.08s ease-in;
    -moz-transition: 0.08s ease-in;
    -webkit-transition: 0.08s ease-in;
  }
  .arrow:hover:before {
    left: 84%auto;
    opacity: 1;
  }
  .arrow:hover {
    width: 170px;
  }
  .arrow:before {
    content: "→";
    position: absolute;
    color: 383736;
    left: 83%;
    opacity: 0;
    -webkit-transition: all 250mx cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`;

export default PostTile;

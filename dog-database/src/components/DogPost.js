import React, { Component } from "react";
import axios, { post } from "axios";
import PostTile from "./PostTile";
import styled from "styled-components";
import Post from "./Post";
import instance from "../axios-conn";
import { storage, app } from "../firebase";
import { trackPromise } from "react-promise-tracker";
import { toast } from "react-toastify";

class DogPost extends Component {
  state = {
    id: null,
    theName: null,
    age: null,
    gender: null,
    breed: null,
    description: null,
    file: null,
    dogTagList: [],
  };

  componentDidMount() {
    trackPromise(
      instance.get("/posts.json").then((res) => {
        console.log(res.data);
        const result = [];
        for (let key in res.data) {
          result.push({
            ...res.data[key],
            id: key,
          });
        }
        this.setState({ dogTagList: result });
      })
    );

    //.catch((err) => console.log(err));
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.fileUpload(this.state.file).then((response) => {
      console.log(response.data);
    });
  }

  onChange(event) {
    this.setState({ file: event.target.files[0] });
  }
  fileUpload(file) {
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post("gs://dog-database-d87bb.appspot.com", formData, config);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      theName: this.state.theName,
      age: this.state.age,
      gender: this.state.gender,
      breed: this.state.breed,
      description: this.state.description,
      file: this.state.file,
      id: this.state.id,
    };
    console.log(data);

    instance
      .post("/posts.json", data)
      .then((res) => {
        const fresh_post = res.data;
        this.state.dogTagList.push(fresh_post);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <StyledCreatePost>
          <form onSubmit={this.onFormSubmit}>
            <label>Image Upload</label>
            <input type="file" onChange={this.onChange} />
            <button className="arrow" type="submit">
              upload
            </button>
          </form>
          <form
            className="ui-form"
            autoComplete="off"
            onSubmit={this.handleSubmit}
          >
            <label>Name</label>
            <input
              autofocus
              type="text"
              placeholder="name.."
              name="theName"
              onChange={this.handleChange}
            />
            <label>Description</label>
            <input
              type="text"
              placeholder="contents.."
              name="description"
              onChange={this.handleChange}
            />
            <label>Age</label>
            <input
              type="text"
              placeholder="age in years.."
              name="age"
              onChange={this.handleChange}
            />
            <label>Gender</label>
            <input
              type="text"
              placeholder="gender.."
              name="gender"
              onChange={this.handleChange}
            />
            <label>Breed</label>
            <input
              type="text"
              placeholder="breed.."
              name="breed"
              onChange={this.handleChange}
            />

            <button className="arrow" type="submit">
              SUBMIT
            </button>
          </form>
        </StyledCreatePost>
        <StyledPost>
          {this.state.dogTagList &&
            this.state.dogTagList.map((dog) => (
              <PostTile
                key={dog.id}
                id={dog.id}
                theName={dog.theName}
                age={dog.age}
                gender={dog.gender}
                breed={dog.breed}
                description={dog.description}
                file={dog.file}
              />
            ))}
        </StyledPost>
      </div>
    );
  }
}

const StyledCreatePost = styled.a`
  //display: block;
  padding-left: 5%;
  font-size: 25px;
  button {
    position: relative;
    //display: block;
    height: 35px;
    width: 100px;
    margin: 10px 7px;
    padding: 5px 5px;
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 2px;
    color: white;
    border: 2px white solid;
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

const StyledPost = styled.a`
  display: block;
  padding-left: -5%;
  a {
    color: black;
    text-decoration: none;
  }
`;

export default DogPost;

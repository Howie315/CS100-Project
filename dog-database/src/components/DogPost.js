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
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      theName: null,
      age: null,
      gender: null,
      breed: null,
      description: null,
      image: null,
      url: "",
      progress: 0,
      dogTagList: [],
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault(); // Stop form submit
    this.fileUpload(this.state.image).then((response) => {
      console.log(response.data);
    });
  }
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

  handleChange2 = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progrss function ....
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      (error) => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage()
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            this.setState({ url });
          });
      }
    );
  };

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
      image: this.state.image,
      id: this.state.id,
      url: this.state.url,
      progress: this.state.progress,
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
          <form onSubmit={this.handleUpload}>
            <label>Image Upload</label>
            <br />

            <input type="file" onChange={this.handleChange2} />
            <button className="arrow" type="submit" onclick={this.handleUpload}>
              Upload
            </button>
            <br />
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
                image={dog.image}
                url={dog.url}
                progress={dog.progress}
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

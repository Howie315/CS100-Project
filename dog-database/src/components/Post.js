import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import * as ImagePicker from "expo-image-picker";
import instance from "../axios-conn";
import { storage } from "../firebase";

const Post = ({ match }) => {
  const [post, setPost] = useState({});
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
          });
      }
    );
  };

  console.log("image: ", image);
  
  useEffect(() => {
    instance
      .get(`posts/${match.params}.json/`)
      .then((res) => {
        setPost(res.data.post);

        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <StyledPost>
        <h1>{post.theName}</h1>
        <h2>
          <p className="breed">
            {post.breed}
            {post.gender}
            {post.age}
          </p>
        </h2>
        <div class="col-lg-7">{post.file}</div>

        <p className="body">{post.description}</p>
      </StyledPost>
    </div>
  );
};

const StyledPost = styled.a`
  display: block;
  margin: auto;
  /* font-family: 'Courier New', Courier, monospace; */
  h1 {
    text-align: left;
    padding-left: 10%;
  }
  .user {
    text-align: left;
    padding-left: 14%;
    font-style: italic;
  }
  .body {
    text-align: left;
    padding-left: 17%;
  }
`;

export default Post;

import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FirebaseApp } from 'firebase/app';
import instance from "../axios-conn";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

const Post = ({ match }) => {
    const [post, setPost] = useState({});
    useEffect(() => {
        instance.get(`posts/${match.params.id}.json/`)
             .then(res => {
                 setPost(res.data.post);
                 console.log(res.data);
             })
             .catch(err => console.log(err));         
    }, []);

    return (
        <div>
            <StyledPost>
                <h1>{post.theName}</h1>
                <h2>{post.age},
                {post.gender},
                {post.breed}
                </h2>
                <p className='body'>{post.description}</p>
            </StyledPost>
        </div>
    );
};

const StyledPost = styled.a`
    display: block;
    margin:auto;
    /* font-family: 'Courier New', Courier, monospace; */
    h1{
        text-align:left;
        padding-left: 10%;
    }
    .user{
        text-align:left;
        padding-left:14%;
        font-style:italic;
    }
    .body{
        text-align:left;
        padding-left:17%;
    }
`;

export default Post;
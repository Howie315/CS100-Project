import React from 'react';
import ReactLoading from "react-loading";
import FadeIn from 'react-fade-in';
import Lottie from "lottie-react";
import "bootstrap/dist/css/bootstrap.css";
import * as rubikData from "./rubiks.json";
import * as doneData from "./done.json";

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: rubikData,
	rendererSettings: {
	  preserveAspectRatio: "xMidYMid slice"
	}
  };

  const defaultOptions2 = {
	loop: false,
	autoplay: true,
	animationData: doneData.default,
	rendererSettings: {
	  preserveAspectRatio: "xMidYMid slice"
	}
  };

export default class Loading extends React.Component {
	constructor(props){
	   super(props);
       this.state = {
          loading: undefined,
		  done: undefined
	   };
	}

    componentDidMount() {
        setTimeout(() => {
          fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => this.setState({ done: true }));
        }, 1200);
      }
    
      render() {
        return (
            <div>
            {!this.state.done ? (
              <ReactLoading type={"bars"} color={"white"} />
            ) : (
              <h1>Welcome to Dog DataBase</h1>
            )}
          </div>
        );
      }
 }





import React from 'react';
import ReactLoading from "react-loading";
import FadeIn from 'react-fade-in';
import Lottie from "lottie-react";
import "bootstrap/dist/css/bootstrap.css";
import * as rubikData from "./rubiks.json";
import * as doneData from "./done.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";

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
                <FadeIn>
              <ReactLoading type={"bars"} color={"white"} />
              </FadeIn>
            ) : (
                <Router>
                <Navigation />
                <Routes>
                    <Route exact path='/' exact element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
                </Router>
            )}
          </div>
        );
      }
 }





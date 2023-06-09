import React from 'react';
import ReactLoading from "react-loading";
import FadeIn from 'react-fade-in';

import "bootstrap/dist/css/bootstrap.css";
import * as rubikData from "./rubiks.json";
import * as doneData from "./done.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import DogListings from "./components/DogListings";
import AddDog from "./components/AddDog";
import RemoveDog from "./components/RemoveDog";


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
                    <Route exact path='/' element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/DogListings" element={<DogListings />}/>
                    <Route path="/AddDog" element={<AddDog />} />
                   <Route path ="/RemoveDog" element={<RemoveDog />} />
                 
                </Routes>
                </Router>
            )}
          </div>
        );
      }
 }





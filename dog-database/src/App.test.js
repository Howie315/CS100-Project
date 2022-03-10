import { render, screen } from "@testing-library/react";
import App from "./App";

import DogPost from "./components/DogPost";
import PostTile from "./components/PostTile";
import renderer from "react-test-renderer";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Home from "./components/Home";
import Post from "./components/Post";
it("renders correctly across screens", () => {
  const tree = renderer.create(<DogPost />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders correctly", () => {
  const tree = renderer.create(<PostTile />).toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders correctly", () => {
  const tree = renderer.create(<Post />).toJSON();
  expect(tree).toMatchSnapshot();
});

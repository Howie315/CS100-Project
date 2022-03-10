// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import DogPost from "./components/DogPost";
import PostTile from "./components/PostTile";
import renderer from "react-test-renderer";
it("renders correctly across screens", () => {
  const tree = renderer.create(<DogPost />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders correctly", () => {
  const tree = renderer.create(<PostTile />).toJSON();
  expect(tree).toMatchSnapshot();
});

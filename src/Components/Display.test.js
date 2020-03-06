import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

import Display, { addPoints } from "./Display";

test("App renders without crashing", () => {
  render(<App />);
});

test("addPoints adds 1 point to score", () => {
  expect(addPoints(1)).toBe(2);
});

test("App contains a strike button", () => {
  // arrage
  const { getByTestId } = render(<App />);
  //act
  getByTestId(/strikeBtn/i);
});

/* eslint-disable */
import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { App } from "./App";

afterEach(() => {
  cleanup();
});

it("should render h1", () => {
  render(<App />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument;
});

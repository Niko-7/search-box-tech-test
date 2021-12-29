/*eslint-disable */
import { cleanup, render, screen } from "@testing-library/react";
import { App } from "./App";
import renderer from "react-test-renderer";
const { axe } = require("jest-axe");
import "jest-axe/extend-expect";

afterEach(() => {
  cleanup();
});

describe("App component", () => {
  it("should render the App component", () => {
    render(<App />);
    expect(<App />).toBeInTheDocument;
  });
});

describe("accesibility tests", () => {
  it("should have no accesibility errors on the app component", async () => {
    const { container } = render(<App />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Snapshot tests", () => {
  it("should match the snapshot of the App component", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

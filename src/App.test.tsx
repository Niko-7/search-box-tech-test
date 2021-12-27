/*eslint-disable */
import { cleanup, render, screen } from "@testing-library/react";
import { App } from "./App";
import renderer from "react-test-renderer";
const { axe, toHaveNoViolations } = require("jest-axe");
expect.extend(toHaveNoViolations);

afterEach(() => {
  cleanup();
});

describe("App component", () => {
  it("should render App component", () => {
    render(<App />);
    expect(<App />).toBeInTheDocument;
  });
});

describe("accesibility tests", () => {
  it("should have no accesibility errors on app component", async () => {
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

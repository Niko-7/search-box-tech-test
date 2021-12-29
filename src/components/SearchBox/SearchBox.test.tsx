/*eslint-disable */
import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { SearchBox } from ".";
const { axe } = require("jest-axe");
import "jest-axe/extend-expect";

afterEach(() => {
  cleanup();
});

describe("Snapshot tests", () => {
  it("should match the snapshot of the SearchBox component", () => {
    const tree = renderer.create(<SearchBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("accesibility tests", () => {
  it("should have no accesibility errors on SearchBox component", async () => {
    const { container } = render(<SearchBox />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

/*eslint-disable */
import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { LocationRegion } from ".";
const { axe } = require("jest-axe");
import "jest-axe/extend-expect";

afterEach(() => {
  cleanup();
});

describe("LocationRegion component", () => {
  it("should render the region and country in a single string seperated by a comma", () => {
    render(
      <LocationRegion
        region={"Greater Manchester"}
        country={"United Kingdom"}
        city={"Manchester"}
      />
    );
    const locationRegion = screen.getByText(
      "Manchester, Greater Manchester, United Kingdom"
    );
    expect(locationRegion).toBeInTheDocument;
  });
});

describe("Snapshot tests", () => {
  it("should match the snapshot of the LocationRegion component", () => {
    const tree = renderer
      .create(
        <LocationRegion
          region={"Greater Manchester"}
          country={"United Kingdom"}
          city={"Manchester"}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("accesibility tests", () => {
  it("should have no accesibility errors on LocationRegion component", async () => {
    const { container } = render(
      <LocationRegion
        region={"Greater Manchester"}
        country={"United Kingdom"}
        city={"Manchester"}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

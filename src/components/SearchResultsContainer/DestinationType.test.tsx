/*eslint-disable */
import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { DestinationType } from ".";
const { axe } = require("jest-axe");
import "jest-axe/extend-expect";

afterEach(() => {
  cleanup();
});

describe("DestinationType component", () => {
  describe("It should return the appropriate type of destination", () => {
    it("should return City", () => {
      render(<DestinationType destinationKind={"C"} />);
      const typeCity = screen.getByText("City");
      expect(typeCity).toBeInTheDocument;
    });
    it("should return Airport", () => {
      render(<DestinationType destinationKind={"A"} />);
      const typeAirport = screen.getByText("Airport");
      expect(typeAirport).toBeInTheDocument;
    });
    it("should return Station", () => {
      render(<DestinationType destinationKind={"T"} />);
      const typeStation = screen.getByText("Station");
      expect(typeStation).toBeInTheDocument;
    });
  });
});

describe("Snapshot tests", () => {
  it("should match the snapshot of the DestinationType component", () => {
    const tree = renderer
      .create(<DestinationType destinationKind={"C"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("accesibility tests", () => {
  it("should have no accesibility errors on DestinationType component", async () => {
    const { container } = render(
      <DestinationType destinationKind={"C"} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

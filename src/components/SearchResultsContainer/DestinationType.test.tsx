/*eslint-disable */
import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { DestinationType } from ".";
const { axe, toHaveNoViolations } = require("jest-axe");
expect.extend(toHaveNoViolations);

afterEach(() => {
  cleanup();
});

describe("DestinationType component", () => {
  describe("It should return the appropriate type of destination", () => {
    it("should return City", () => {
      render(<DestinationType destinationKind={"city-123"} />);
      const typeCity = screen.getByText("City");
      expect(typeCity).toBeInTheDocument;
    });
    it("should return Airport", () => {
      render(<DestinationType destinationKind={"airport-123"} />);
      const typeAirport = screen.getByText("Airport");
      expect(typeAirport).toBeInTheDocument;
    });
    it("should return Station", () => {
      render(<DestinationType destinationKind={"station-123"} />);
      const typeStation = screen.getByText("Station");
      expect(typeStation).toBeInTheDocument;
    });
  });
});

describe("Snapshot tests", () => {
  it("should match the snapshot of the DestinationType component", () => {
    const tree = renderer
      .create(<DestinationType destinationKind={"city-123"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("accesibility tests", () => {
  it("should have no accesibility errors on DestinationType component", async () => {
    const { container } = render(
      <DestinationType destinationKind={"city-123"} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

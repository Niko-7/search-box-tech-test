/*eslint-disable */
import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { DropDown } from ".";
const { axe, toHaveNoViolations } = require("jest-axe");
expect.extend(toHaveNoViolations);

afterEach(() => {
  cleanup();
});

describe("DropDown component", () => {
  it("should render the listbox and an option", () => {
    render(
      <DropDown
        locations={[
          {
            bookingId: "airport-38566",
            city: "Manchester",
            country: "United Kingdom",
            iata: "MAN",
            name: "Manchester Airport",
            region: "Greater Manchester",
          },
        ]}
      />
    );
    const dropdownList = screen.getByRole("listbox");
    expect(dropdownList).toBeInTheDocument;
    const dropdownOption = screen.getByRole("option");
    expect(dropdownOption).toBeInTheDocument;
  });
});

describe("accesibility tests", () => {
  it("should have a dropdown list label", () => {
    render(
      <DropDown
        locations={[
          {
            bookingId: "airport-38566",
            city: "Manchester",
            country: "United Kingdom",
            iata: "MAN",
            name: "Manchester Airport",
            region: "Greater Manchester",
          },
        ]}
      />
    );
    const dropdownLabel = screen.getByLabelText("Search Result List");
    expect(dropdownLabel).toBeInTheDocument;
  });
});

describe("Snapshot tests", () => {
  it("should match the snapshot of the App component", () => {
    const tree = renderer
      .create(
        <DropDown
          locations={[
            {
              bookingId: "airport-38566",
              city: "Manchester",
              country: "United Kingdom",
              iata: "MAN",
              name: "Manchester Airport",
              region: "Greater Manchester",
            },
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

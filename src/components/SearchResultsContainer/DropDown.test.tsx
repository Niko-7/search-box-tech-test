/*eslint-disable */
import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import { DropDown } from ".";
const { axe } = require("jest-axe");
import "jest-axe/extend-expect";

afterEach(() => {
  cleanup();
});

describe("DropDown component", () => {
  it("should render the listbox", () => {
    render(
      <DropDown
        parentCallback
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
  });
  it("should render an option", () => {
    render(
      <DropDown
        parentCallback
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
    const dropdownOption = screen.getByRole("option");
    expect(dropdownOption).toBeInTheDocument;
  });
});

describe("accesibility tests", () => {
  it("should have a dropdown list label", () => {
    render(
      <DropDown
        parentCallback
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

  it("should have no accesibility errors on the app component", async () => {
    const { container } = render(
      <DropDown
        parentCallback
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
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe("Snapshot tests", () => {
  it("should match the snapshot of the App component", () => {
    const tree = renderer
      .create(
        <DropDown
          parentCallback
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

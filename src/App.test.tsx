/*eslint-disable */
import {
  cleanup,
  getByLabelText,
  render,
  screen,
} from "@testing-library/react";
import { App } from "./App";
import { DropDown } from "./components/SearchResultsContainer";
import { SearchResults } from "./components/SearchResultsContainer/SearchResults";
import renderer from "react-test-renderer";
import { SearchBox } from "./components/SearchBox";
import { Footer } from "./components/Footer";
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
describe("SearchResults component", () => {

  it("should render the placeholder input", () => {
    render(<SearchResults placeholder={"Pick-up Location"} />);
    const placeholderInput = screen.getByRole("textbox");
    expect(placeholderInput).toBeInTheDocument;
  });

  it("should render the placeholder value into placeholder text", () => {
    render(<SearchResults placeholder="Pick-up Location" />);
    const placeholderText = screen.getByPlaceholderText(/Pick-up Location/i);
    expect(placeholderText).toBeInTheDocument;
  });
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

describe("Footer component", () => {
  it("should render Footer component", () => {
    render(<Footer />);
    expect(<Footer />).toBeInTheDocument;
  });
});

describe("accesibility tests", () => {
  it("should have an input label", () => {
    render(<SearchResults placeholder={"Pick-up Location"} />);
    const placeholderLabel = screen.getByLabelText("Pick-up Location");
    expect(placeholderLabel).toBeInTheDocument;
  });

  it("should have a footer label", () => {
    render(<Footer />);
    const footerLabel = screen.getByLabelText("Information Footer");
    expect(footerLabel).toBeInTheDocument;
  });

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
  it("should have no accesibility errors on app component", async () => {
    const { container } = render(<App />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
  it("should have no accesibility errors on Footer component", async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
  it("should have no accesibility errors on SearchResults component", async () => {
    const { container } = render(
      <SearchResults placeholder={"Pick-up Location"} />
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});

describe("Snapshot tests", () => {
  it("should match the snapsho of the App componentt", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should match the snapshot of the SearchBox component", () => {
    const tree = renderer.create(<SearchBox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should match the snapshot of the DestinationType component", () => {
    const tree = renderer
      .create(<SearchResults placeholder={"Pick-up Location"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should match the snapshot of the Footer component", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

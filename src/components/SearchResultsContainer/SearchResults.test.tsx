/*eslint-disable */
import { SearchResults } from ".";
import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
const { axe } = require("jest-axe");
import "jest-axe/extend-expect";

afterEach(() => {
  cleanup();
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

describe("accesibility tests", () => {
  it("should have an input label", () => {
    render(<SearchResults placeholder={"Pick-up Location"} />);
    const placeholderLabel = screen.getByLabelText("Pick-up Location");
    expect(placeholderLabel).toBeInTheDocument;
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
  it("should match the snapshot of the DestinationType component", () => {
    const tree = renderer
      .create(<SearchResults placeholder={"Pick-up Location"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

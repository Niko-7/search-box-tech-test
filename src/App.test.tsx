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


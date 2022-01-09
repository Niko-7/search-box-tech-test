/*eslint-disable */
import { SearchResults } from ".";
import {
  cleanup,
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
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



describe("Dropdown Results tests", () => {
  it("should display London - Victoria Station as an option", async () => {
    const { getByLabelText, getByText } = render(
      <SearchResults placeholder={"Pick-up Location"} />
    );
    const input = getByLabelText("Pick-up Location");
    fireEvent.change(input, { target: { value: "London" } });
    await waitFor(() =>
      expect(getByText("London - Victoria Station")).toBeTruthy()
    );
  });

  it("should display up to 6 results", async () => {
    const { getByLabelText, getAllByRole } = render(
      <SearchResults placeholder={"Pick-up Location"} />
    );
    const input = getByLabelText("Pick-up Location");
    fireEvent.change(input, { target: { value: "London" } });
    await waitFor(() => expect(getAllByRole("option").length).toBe(6));
  });

  it("should not display any results if only 1 letter is entered", async () => {
    const { getByLabelText, queryAllByRole } = render(
      <SearchResults placeholder={"Pick-up Location"} />
    );
    const input = getByLabelText("Pick-up Location");
    fireEvent.change(input, { target: { value: "A" } });
    await waitFor(() => expect(queryAllByRole("option").length).toBe(0));
  });

  it("should remove any options when the input is truncated to 1 letter ", async () => {
    const { getByLabelText, queryAllByRole } = render(
      <SearchResults placeholder={"Pick-up Location"} />
    );
    const input = getByLabelText("Pick-up Location");
    fireEvent.change(input, { target: { value: "London" } });
    await waitFor(() => expect(queryAllByRole("option").length).toBe(6));
    fireEvent.change(input, { target: { value: "A" } });
    await waitFor(() => expect(queryAllByRole("option").length).toBe(0));
  });

  it("should display `No results found' when passing an invalid location", async () => {
    const { getByLabelText, getByText } = render(
      <SearchResults placeholder={"Pick-up Location"} />
    );
    const input = getByLabelText("Pick-up Location");
    fireEvent.change(input, { target: { value: "zxqkx" } });
    await waitFor(() => expect(getByText("No results found")).toBeTruthy());
  });
});

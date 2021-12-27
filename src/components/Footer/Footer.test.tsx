/*eslint-disable */
import { Footer } from ".";
import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
const { axe, toHaveNoViolations } = require("jest-axe");
expect.extend(toHaveNoViolations);

afterEach(() => {
  cleanup();
});

describe("Footer component", () => {
  it("should render Footer component", () => {
    render(<Footer />);
    expect(<Footer />).toBeInTheDocument;
  });
});

describe("accesibility tests", () => {
  it("should have a footer label", () => {
    render(<Footer />);
    const footerLabel = screen.getByLabelText("Information Footer");
    expect(footerLabel).toBeInTheDocument;
  });

  it("should have no accesibility errors on Footer component", async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});

describe("Snapshot test", () => {
  it("should match the snapshot of the Footer component", () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

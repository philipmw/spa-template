import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import * as React from "react";
import {Heading} from "./Heading";

describe("Heading", () => {
  it("renders a <h2>", () => {
    render(<Heading text="blah"/>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("puts the `text` attribute inside <h2>", () => {
    render(<Heading text="blah"/>);
    const element = screen.getByRole("heading");
    expect(element).toHaveTextContent("blah");
  });
});

import React from "react";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import CustomerSupport from "./CustomerSupport";

describe("CustomerSupport", () => {
  test("should render CustomerSupport componenet", () => {
    render(<CustomerSupport />);

    // screen.debug();

    const text = screen.getByText(/Simone is here to help you/i);
    const imgText = screen.getByAltText(/John Doe/i);
    const button = screen.getByRole("button");

    expect(text).toBeInTheDocument();
    expect(imgText).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

import React from "react";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import VisitorsCard from "./VisitorsCard";

describe("VisitorsCard", () => {
  test("should render VisitorsCard componenet", () => {
    render(<VisitorsCard />);

    // screen.debug()

    const title = screen.getByText(/Visitors/i);
    const text = screen.getByText("1824");
    const element = screen.getByTestId("ArrowForwardOutlinedIcon");

    expect(title).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(element).toBeInTheDocument();
  });
});

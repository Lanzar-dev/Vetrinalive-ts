import React from "react";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("should render Navbar componenet", () => {
    render(<Navbar />);

    // screen.debug();

    const navBtn = screen.getByRole("button");
    const title = screen.queryByText(/Dashboard/i);
    const menuIcon = screen.getByTestId("MenuIcon");
    const badgeTitle = screen.getByText(/What’s new/i);

    expect(navBtn).toBeInTheDocument();
    expect(title).toBeNull();
    expect(menuIcon).toBeInTheDocument();
    expect(badgeTitle).toBeInTheDocument();
  });
});

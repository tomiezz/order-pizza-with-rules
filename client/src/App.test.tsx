import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");

    render(<App />);

    expect(spy).not.toHaveBeenCalled();
  });

  it("Expect render without crash", () => {
    render(<App />);
  });
});

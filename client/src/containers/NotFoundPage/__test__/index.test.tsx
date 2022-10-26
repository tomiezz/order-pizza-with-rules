import { render, screen } from "@testing-library/react";
import NotFoundPage from "..";

describe("<NotFoundPage />", () => {
  it("should render correctly", () => {
    render(<NotFoundPage />);

    expect(screen.getByText("This page is not found")).toBeTruthy();
  });
});

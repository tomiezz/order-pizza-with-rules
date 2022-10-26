import { render, screen } from "@testing-library/react";
import ErrorBoundary from "..";

describe("<ErrorBoundaries />", () => {
  it("should catch error in child component", () => {
    const ThrowError = () => {
      throw new Error("Test");
    };

    console.error = jest.fn();

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    expect(screen.getByText("Sorry.. There was an error")).toBeTruthy();
  });
});

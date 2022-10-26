import { cleanup, render, screen } from "@testing-library/react";
import Header from "..";
import { HeaderProps } from "../types";

afterEach(cleanup);

describe("<Header />", () => {
  it("renders CheckoutItem", () => {
    const headerProps: HeaderProps = {
      cartSize: 4,
    };
    const view = render(<Header {...headerProps} />);

    expect(screen.getByText("4")).toBeTruthy();
  });
});

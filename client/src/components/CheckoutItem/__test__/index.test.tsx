import CheckoutItem from "../index";
import { CheckoutItemProps } from "../types";
import { cleanup, render, screen } from "@testing-library/react";

afterEach(cleanup);

describe("<CheckoutItem />", () => {
  it("renders CheckoutItem", () => {
    const checkoutItemProps: CheckoutItemProps = {
      price: 100,
      quantity: 3,
      title: "Test item",
      desc: "Test item desc",
    };

    const view = render(<CheckoutItem {...checkoutItemProps} />);

    expect(screen.getByText("Test item")).toBeTruthy();
    expect(screen.getByText("100$")).toBeTruthy();
    expect(screen.getByText("3")).toBeTruthy();
    expect(screen.getByText("Test item desc")).toBeTruthy();
  });
});

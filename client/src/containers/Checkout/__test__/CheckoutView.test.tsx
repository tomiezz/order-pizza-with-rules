import { cleanup, render, screen } from "@testing-library/react";
import CheckoutView from "../CheckoutView";
import { CheckoutViewProps } from "../types";

const renderWithData = () => {
  const props: CheckoutViewProps = {
    data: [
      {
        id: "1",
        price: 11,
        quantity: 111,
        title: "One",
      },
      {
        id: "2",
        price: 22,
        quantity: 222,
        title: "Two",
      },
    ],
    options: [],
    price: 100,
  };
  render(<CheckoutView {...props} />);
};

const renderWithoutData = () => {
  const props: CheckoutViewProps = {
    data: [],
    options: [],
    price: 100,
  };
  render(<CheckoutView {...props} />);
};
describe("<CheckoutView />", () => {
  it("should render no item correctly", () => {
    renderWithoutData();

    expect(screen.getByText(/no data/i)).toBeTruthy();
  });

  it("should render items correctly", () => {
    renderWithData();

    expect(screen.getByText(/total/i)).toBeTruthy();
  });
});

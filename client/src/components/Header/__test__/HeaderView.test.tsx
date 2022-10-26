import { cleanup, render, screen } from "@testing-library/react";
import HeaderView from "../HeaderView";
import { HeaderViewProps } from "../types";

afterEach(cleanup);

describe("<HeaderView />", () => {
  it("render HeaderView", () => {
    const headerViewProps: HeaderViewProps = {
      cartSize: 4,
    };
    const view = render(<HeaderView {...headerViewProps} />);

    expect(screen.getByText("4")).toBeTruthy();
  });
});

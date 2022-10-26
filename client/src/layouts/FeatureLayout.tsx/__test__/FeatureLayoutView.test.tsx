import { render, screen } from "@testing-library/react";
import FeatureLayoutView from "../FeatureLayoutView";

describe("<FeatureLayoutView />", () => {
  it("should render correctly", () => {
    const view = render(<FeatureLayoutView />);
    expect(screen.getByTestId("header")).toBeTruthy();
  });
});

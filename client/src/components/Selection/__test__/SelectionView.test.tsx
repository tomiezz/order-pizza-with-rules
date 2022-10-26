import { cleanup, render, screen } from "@testing-library/react";
import SelectionView from "../SelectionView";
import { SelectionViewProps } from "../types";

afterEach(cleanup);

describe("<SelectionView />", () => {
  it("renders SelectionView correctly", () => {
    const props: SelectionViewProps = {
      options: [
        { name: "One", value: "1" },
        { name: "Two", value: "2" },
        { name: "Three", value: "3" },
      ],
    };
    const view = render(<SelectionView {...props} />);

    props.options.map(({ name, value }) => {
      expect(screen.getByText(name)).toHaveTextContent(name);
      expect(screen.getByText(name)).toHaveAttribute("data-option");
      expect(screen.getByText(name).getAttribute("data-option")).toBe(value);
    });
  });
});

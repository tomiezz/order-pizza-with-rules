import React, { memo } from "react";
import SelectionView from "./SelectionView";
import { SelectionProps } from "./types";

const Selection = ({ options, onSelect, selectedValue }: SelectionProps) => {
  return (
    <SelectionView
      selectedValue={selectedValue}
      options={options}
      onSelect={onSelect}
    />
  );
};

export default memo(Selection);
export * from "./types";

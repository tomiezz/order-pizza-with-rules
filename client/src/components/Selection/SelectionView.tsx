import { Box, Stack, Tooltip } from "@mui/material";
import React, { memo } from "react";
import { COLOR } from "utils";
import { useStyles } from "./styles";
import { SelectionViewProps } from "./types";

const SelectionView = ({
  options,
  onSelect,
  selectedValue,
}: SelectionViewProps) => {
  const classes = useStyles();
  return (
    <Stack direction="row" spacing={1}>
      {options.map(({ name, value, desc }) => (
        <Tooltip key={value} title={desc} placement="top">
          <Box
            borderColor={COLOR.PRIMARY}
            border={1}
            borderRadius={1}
            px={2}
            py={0.5}
            className={classes.option}
            sx={{
              backgroundColor:
                selectedValue === value ? COLOR.PRIMARY : "unset",
              color: selectedValue === value ? COLOR.WHITE_BACKGROUND : "unset",
            }}
            onClick={onSelect}
            data-option={value}
          >
            {name}
          </Box>
        </Tooltip>
      ))}
    </Stack>
  );
};

export default memo(SelectionView);

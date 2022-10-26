import { Divider, Stack, Typography } from "@mui/material";
import CheckoutItem from "components/CheckoutItem";
import Selection from "components/Selection";
import ToastMessage from "components/ToastMessage";
import React, { Fragment, memo } from "react";
import { COLOR } from "utils";
import { CheckoutDataViewProps } from "../types";

const CheckoutDataView = ({
  data,
  options,
  price,
  onSelect,
  selectedValue,
  alert,
}: CheckoutDataViewProps) => {
  return (
    <Fragment>
      <ToastMessage data={alert} />
      <Stack my={3} spacing={2}>
        {data.map((item) => (
          <CheckoutItem {...item} key={item.id} />
        ))}
      </Stack>

      <Divider />
      <Stack direction="row" justifyContent="space-between">
        <Stack flexDirection="row" alignItems="center" my={2}>
          <Typography mr={2}>Available rules:</Typography>
          <Selection
            selectedValue={selectedValue}
            onSelect={onSelect}
            options={options}
          />
        </Stack>
        <Stack
          alignItems="center"
          flexDirection="row"
          justifyContent="flex-end"
          py={2}
        >
          <Typography mr={2}>Total:</Typography>
          <Typography variant="h5" fontWeight="bold" color={COLOR.SECONDARY}>
            {price || 0}$
          </Typography>
        </Stack>
      </Stack>
    </Fragment>
  );
};

export default memo(CheckoutDataView);

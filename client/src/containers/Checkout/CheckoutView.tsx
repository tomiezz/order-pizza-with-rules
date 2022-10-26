import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "mui-image";
import React, { Fragment } from "react";
import { COLOR } from "utils";
import { CheckoutViewProps } from "./types";
import PizzaImg from "assets/pizza.png";
import CheckoutItem from "components/CheckoutItem";
import Selection from "components/Selection";

const CheckoutView = ({
  data,
  price,
  options,
  selectedValue,
  onSelect,
}: CheckoutViewProps) => {
  return (
    <Grid>
      <Typography variant="h6" fontWeight="bold">
        Checkout
      </Typography>
      {data.length > 0 ? (
        <Fragment>
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
              <Typography
                variant="h5"
                fontWeight="bold"
                color={COLOR.SECONDARY}
              >
                {price || 0}$
              </Typography>
            </Stack>
          </Stack>
        </Fragment>
      ) : (
        <Grid my={8}>
          <Typography textAlign="center">No data</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default CheckoutView;

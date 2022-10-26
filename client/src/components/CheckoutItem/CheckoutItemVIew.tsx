import React from "react";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { useStyles } from "./styles";
import Image from "mui-image";
import PizzaImg from "assets/pizza.png";
import { CheckoutItemViewProps } from "./types";

const CheckoutItemView = ({
  title,
  desc,
  price,
  quantity,
}: CheckoutItemViewProps) => {
  const classes = useStyles();
  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid item md={6}>
        <Grid container spacing={2}>
          <Grid item md={4}>
            <Image
              duration={400}
              easing="ease-out"
              showLoading
              className={classes.img}
              src={PizzaImg}
              alt="Image pizza"
            />
          </Grid>
          <Grid item md={6}>
            <Typography>{title}</Typography>{" "}
            <Typography variant="body2">{desc} </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Typography fontWeight="bold">{quantity}</Typography>
      <Typography fontWeight="bold">{price}$</Typography>
    </Grid>
  );
};

export default CheckoutItemView;

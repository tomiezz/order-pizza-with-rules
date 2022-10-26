import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Image from "mui-image";
import React, { Fragment } from "react";
import { COLOR } from "utils";
import { CheckoutViewProps } from "./types";
import PizzaImg from "assets/pizza.png";
import CheckoutItem from "components/CheckoutItem";
import Selection from "components/Selection";
import Loading from "components/Loading";
import ErrorBox from "components/ErrorBox";
import { NoData } from "components/NoData";
import CheckoutDataView from "./components/CheckoutDataView";

const CheckoutView = ({
  data: parentData,
  error,
  loading,
}: CheckoutViewProps) => {
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorBox />;
  }

  return (
    <Grid>
      <Typography variant="h6" fontWeight="bold">
        Checkout
      </Typography>

      {parentData === null || parentData.data.length === 0 ? (
        <NoData />
      ) : (
        <CheckoutDataView {...parentData} />
      )}
    </Grid>
  );
};

export default CheckoutView;

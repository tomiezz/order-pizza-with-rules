import { Grid, Typography } from "@mui/material";
import React from "react";

export const NoData = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" py={8}>
      <Typography fontWeight="bold">No data</Typography>
    </Grid>
  );
};

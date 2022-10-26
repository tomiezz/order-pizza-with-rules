import React from "react";
import { Grid, Typography } from "@mui/material";

const ErrorBox = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" py={8}>
      <Typography fontWeight="bold">Something went wrong...</Typography>
    </Grid>
  );
};

export default ErrorBox;

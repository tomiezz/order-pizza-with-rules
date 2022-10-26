import { CircularProgress, Grid } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" py={8}>
      <CircularProgress />
    </Grid>
  );
};

export default Loading;

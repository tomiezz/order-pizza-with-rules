import { Grid, Link, Typography } from "@mui/material";
import React, { memo } from "react";
import { APP_ROUTES } from "../../utils";

const Home = () => {
  return (
    <Grid
      container
      sx={{
        height: "100%",
      }}
      flexDirection="column"
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4" fontWeight="bold" mb={2}>
        Welcome to Pizza Store
      </Typography>

      <Link underline="hover" href={APP_ROUTES.PRODUCT}>
        Shopping Now
      </Link>
    </Grid>
  );
};

export default memo(Home);

import { Grid, Link, Typography } from "@mui/material";
import React, { memo } from "react";
import { APP_ROUTES } from "../../utils";

const NotFoundPage = () => {
  return (
    <Grid
      sx={{
        height: "100%",
      }}
      container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h4" fontWeight="bold" mb={2}>
        This page is not found
      </Typography>

      <Link underline="hover" href={APP_ROUTES.HOME}>
        Go home
      </Link>
    </Grid>
  );
};

export default memo(NotFoundPage);

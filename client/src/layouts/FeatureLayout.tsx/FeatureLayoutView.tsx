import { Container, Grid, Typography } from "@mui/material";
import Header from "components/Header";
import React, { memo } from "react";
import { Outlet } from "react-router";
import { COLOR } from "utils";
import { useStyles } from "./styles";
import { FeatureLayoutViewProps } from "./types";

const FeatureLayoutView = ({ cartSize, onReset }: FeatureLayoutViewProps) => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Header cartSize={cartSize} onReset={onReset} />
      <Container
        maxWidth="md"
        sx={{
          mt: 3,
          py: 2,
          backgroundColor: COLOR.WHITE_BACKGROUND,
          overflow: "auto",
        }}
      >
        <Outlet />
      </Container>
    </Grid>
  );
};

export default memo(FeatureLayoutView);

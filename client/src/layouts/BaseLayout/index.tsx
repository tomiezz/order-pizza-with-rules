import { Container } from "@mui/material";
import React, { memo, ReactNode } from "react";
import { Outlet } from "react-router";
import { useStyles } from "./styles";

type Props = {
  children?: ReactNode;
};
const BaseLayout = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Outlet />
    </Container>
  );
};

export default memo(BaseLayout);

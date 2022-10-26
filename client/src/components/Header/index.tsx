import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { COLOR } from "utils";
import HeaderView from "./HeaderView";
import { HeaderProps } from "./types";

const Header = (props: HeaderProps) => {
  return <HeaderView {...props} />;
};

export default Header;
export * from "./types";

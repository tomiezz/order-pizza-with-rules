import { Badge, Box, IconButton, Link, Stack, Typography } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import React from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { APP_ROUTES, COLOR } from "utils";
import { useStyles } from "./styles";
import { HeaderViewProps } from "./types";

const HeaderView = ({ cartSize, onReset }: HeaderViewProps) => {
  const classes = useStyles();
  return (
    <header data-testid="header" className={classes.root}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <IconButton onClick={onReset}>
            <RestartAltIcon
              fontSize="large"
              sx={{ color: COLOR.WHITE_BACKGROUND }}
            />
          </IconButton>
        </Box>
        <Typography
          variant="h5"
          color={COLOR.WHITE_BACKGROUND}
          fontWeight="bold"
        >
          Pizza Store
        </Typography>
        <Link href={APP_ROUTES.CHECKOUT} color={COLOR.WHITE_BACKGROUND}>
          <Badge badgeContent={cartSize} color="secondary">
            <ShoppingBasketIcon fontSize="large" />
          </Badge>
        </Link>
      </Stack>
    </header>
  );
};

export default HeaderView;

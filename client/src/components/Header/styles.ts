import { makeStyles } from "@mui/styles";
import { COLOR } from "utils";

const useStyles = makeStyles({
  root: {
    height: 60,
    backgroundColor: COLOR.PRIMARY,
    "& > div": {
      maxWidth: 900,
      height: "100%",
      margin: "0 auto",
    },
  },
});

export { useStyles };

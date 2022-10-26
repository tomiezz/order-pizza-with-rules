import { makeStyles } from "@mui/styles";
import { COLOR } from "../../utils";

const useStyles = makeStyles({
  root: {
    backgroundColor: COLOR.GRAY_BACKGROUND,
    minHeight: "100%",
    overflow: "auto",
  },
  header: {
    backgroundColor: COLOR.PRIMARY,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
});

export { useStyles };

import { AlertColor, SnackbarProps } from "@mui/material";
import { AlertMessageType } from "utils";

type ToastMessageProps = {
  data?: AlertMessageType | null;
} & SnackbarProps;

type ToastMessageViewProps = SnackbarProps & {
  messageContent: string;
  type: AlertColor;
};

export type { ToastMessageProps, ToastMessageViewProps };

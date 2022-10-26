import { Alert, Snackbar } from "@mui/material";
import React, { memo } from "react";
import { ToastMessageViewProps } from "./types";

const ToastMessageView = ({
  messageContent,
  type,
  ...snackbarProps
}: ToastMessageViewProps) => {
  return (
    <Snackbar {...snackbarProps}>
      <Alert
        onClose={snackbarProps.onClose as any}
        severity={type}
        sx={{ width: "100%" }}
      >
        {messageContent}
      </Alert>
    </Snackbar>
  );
};

export default memo(ToastMessageView);

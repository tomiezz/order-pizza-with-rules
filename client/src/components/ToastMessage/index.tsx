import { Snackbar } from "@mui/material";
import React, { memo } from "react";
import ToastMessageView from "./ToastMessageView";
import { ToastMessageProps } from "./types";
import useToastMessage from "./useToastMessage";

const ToastMessage = (props: ToastMessageProps) => {
  const toastMessageViewProps = useToastMessage(props);
  return <ToastMessageView {...toastMessageViewProps} />;
};

export default memo(ToastMessage);

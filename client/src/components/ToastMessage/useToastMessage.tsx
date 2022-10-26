import React, { useEffect, useState } from "react";
import { ToastMessageProps, ToastMessageViewProps } from "./types";

const useToastMessage = (props: ToastMessageProps): ToastMessageViewProps => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  console.log("DATA: ", props.data);

  useEffect(() => {
    if (props.data) {
      handleOpen();
    }
  }, [props.data]);

  return {
    autoHideDuration: props.autoHideDuration || 5000,
    messageContent: props?.data?.message || "",
    type: props?.data?.type || "success",
    open,
    onClose: handleClose,
    anchorOrigin: {
      vertical: "top",
      horizontal: "left",
    },
  };
};

export default useToastMessage;

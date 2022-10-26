import { Grid, Typography } from "@mui/material";
import React, { ReactNode, ErrorInfo } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}
class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Grid
          container
          sx={{ height: "100%" }}
          alignItems="center"
          justifyContent="center"
        >
          <Typography>Sorry.. There was an error</Typography>
        </Grid>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

import { Component, ErrorInfo } from "react";
import { ErrorBoundaryProps, ErrorBoundaryStateType } from "./types";

class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryStateType
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.log("error", error);

    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("error", error);
    console.log("errorInfo", errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h4>Что то пошло не так</h4>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  customError?: JSX.Element;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props?.customError ? this.props.customError : null;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

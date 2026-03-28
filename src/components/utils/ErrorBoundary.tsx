import React from "react";
import i18next from "i18next";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  errorMessage?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Error caught in Error Boundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-xl text-foreground">
            {this.props.errorMessage || i18next.t("common.error")}
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

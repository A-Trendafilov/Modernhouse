import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log the error to the console (or external service like Sentry)
    console.error("Error caught in Error Boundary:", error, info);
    // Example: Send to an error tracking service
    // sendErrorToService(error, info);
  }

  render() {
    // Display fallback UI when there's an error
    if (this.state.hasError) {
      return (
        <h1>
          {this.props.errorMessage ||
            "Something went wrong. Please try again later."}
        </h1>
      );
    }

    return this.props.children;
  }
}

// PropTypes to validate the props
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired, // Ensures that children are passed
  errorMessage: PropTypes.string, // Optional custom error message
};

export default ErrorBoundary;

import React from "react";
import "./error-boundary.style.scss";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(err) {
    return { hasError: true };
  }

  componentDidCatch(err, info) {
    console.log(err);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>Something went wrong. Check the console to see more details.</div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

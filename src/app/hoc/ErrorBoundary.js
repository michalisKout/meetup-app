import React, { Component } from 'react';

const withErrorBoundary = WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        errorMessage: null,
        compomentHasError: false,
      };
    }

    componentDidCatch(error) {
      this.setState({ errorMessage: error, compomentHasError: true });
    }

    handleError(errorMessage) {
      return (
        <div className="error">
          <h1>Something went wrong</h1>
          <p>{errorMessage}</p>
        </div>
      );
    }

    render() {
      const { compomentHasError, errorMessage } = this.state;
      if (compomentHasError) {
        this.handleError(errorMessage);
      }
      return <WrappedComponent {...this.props} />;
    }
  };

export default withErrorBoundary;

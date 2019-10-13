import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { constructErrorMessage } from '../utils/errorUtils';

export default class ErrorBoundary extends Component {
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

  handleError(error) {
    const errorInfo = error && error.toString();

    return (
      <div className="error">
        <h1>Something went wrong!</h1>
        <p>{constructErrorMessage(errorInfo)}</p>
      </div>
    );
  }

  render() {
    const { compomentHasError, errorMessage } = this.state;
    const { children } = this.props;
    if (compomentHasError) this.handleError(errorMessage);

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

import React, { Component } from 'react';

export default class ErrorBoundary extends Component {

  // Store this in Redux
  state = {
    hasError: false
  };

  /**
   * React 16.0.0 provides more elegant error handling to including this
   * concept of an ErrorBoundary class. This lifecycle method can catch and
   * restrict component unmounting to only the error prone component in the tree.
   */
  componentDidCatch(error, info) {
    console.log('An error was caught', error, info);
    this.setState({ hasError: true });
  }

  // Provide fallback UI in the event of a comp error, otherwise
  // display the rest of the component tree.
  render() {
    if(this.state.hasError) {
      return <h2>Oh shoot... Something has gone wrong with {this.props.text}!</h2>
    }
    return this.props.children;
  }
}

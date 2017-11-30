import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReviewForm from '../components/ReviewForm';

import { MDCTextField } from '@material/textfield/dist/mdc.textfield';

class ReviewFormContainer extends Component {

  componentDidMount() {
    //Initialize MDC form elements
    new MDCTextField(document.querySelector('.mdc-text-field'));
  }

  render() {
      return <ReviewForm />
  }
}

// Might not be necessary since we don't need a ref to state
const mapStateToProps = state => {
  return {

  }
}

// Need a ref to dispatch for form actions
const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewFormContainer);

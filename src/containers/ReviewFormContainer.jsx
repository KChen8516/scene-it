import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createReview } from '../actions/reviewActions';

import ReviewForm from '../components/ReviewForm';

import { MDCTextField } from '@material/textfield/dist/mdc.textfield';

class ReviewFormContainer extends Component {

  componentDidMount() {
    //Initialize MDC form elements
    new MDCTextField(document.querySelector('.mdc-text-field'));
  }

  submitReview(e) {
    // Dispatch review data
    this.props.createReview(e);
  }

  render() {
      return <ReviewForm submitReview={this.submitReview.bind(this)}/>
  }
}

// Might not be necessary since we don't need a ref to state
const mapStateToProps = state => {
  return {

  }
}

// Set props for each dispatch action ref needed
const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewFormContainer);

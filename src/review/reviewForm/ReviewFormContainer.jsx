import React, { Component } from 'react';
import ReviewForm from './ReviewForm';

import { connect } from 'react-redux';
import { createReview } from '../../actions/reviewActions';

import { MDCTextField } from '@material/textfield/dist/mdc.textfield';

class ReviewFormContainer extends Component {

  componentDidMount() {
    //Initialize MDC form elements
    new MDCTextField(document.querySelector('.mdc-text-field'));
  }

  componentWillReceiveProps(nextProps) {
      console.log('ReactFormContainer componentWillReciveProps', nextProps );
  }

  submitReview(e) {
    console.log('Form data being dispatched:', e);
    // Dispatch review data
    this.props.createReview(e);
  }

  render() {
      return <ReviewForm submitReview={this.submitReview.bind(this)}/>
  }
}

// TODO: Fetch to populate edit form
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

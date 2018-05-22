import React, { Component } from 'react';
import ReviewFormik from './ReviewForm';

import { connect } from 'react-redux';
import { createReview } from '../../actions/reviewActions';


class ReviewFormContainer extends Component {

  componentWillReceiveProps(nextProps) {
      // console.log('ReactFormContainer componentWillReciveProps', nextProps );
  }

  submitReview(e) {
    console.log('Form data being dispatched:', e);
    // Dispatch review data
    this.props.createReview(e);
  }

  render() {
      return <ReviewFormik submitReview={this.submitReview.bind(this)} user={this.props.user}/>
  }
}

const mapStateToProps = state => {
  return {
      user: state.user.profile,
  }
}

// Set props for each dispatch action ref needed
const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewFormContainer);

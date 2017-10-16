import React, { Component } from 'react';

import ReviewForm from '../components/ReviewForm';

import { connect } from 'react-redux';
import { createReview, createReviewSuccess } from '../actions/reviewActions';

class ReviewContainer extends Component{

  constructor(props) {
    super(props);
    console.log(this.props);
    // Bind the functions to 'this' context
    this.handleText = event => this._handleText(event);
    this.createReviewTest = e => this._createReviewTest(e);
    // let reviewText;
  }

  _createReviewTest(e) {
    console.log('Created Review!');
    this.props.createReview({
      'text': this.reviewText,
      'movieTitle': 'Something',
      'movieId': 1239789
    });
    e.preventDefault();
  }

  _handleText(e) {
    console.log(e.target.value);
    console.log(this.props);
    this.reviewText = e.target.value;
  }

  render() {
    return (
      <ReviewForm
        movieTitle={this.props.title}
        createReview={this.createReviewTest}
        reviewText={this.handleText}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    review: state.reviews.newReview.text
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createReview: review => dispatch(createReview(review)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);

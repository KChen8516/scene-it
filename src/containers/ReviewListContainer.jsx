import React, { Component } from 'react';

import ReviewList from '../components/ReviewList';

import { connect } from 'react-redux';
import { fetchReviews } from '../actions/reviewActions';

class ReviewListContainer extends Component {

  componentWillMount() {
    this.props.getReviews();
  }

  componentDidMount() {

  }

  render() {
    console.log(this.props.reviews);
    return (
      <ReviewList reviews={this.props.reviews} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    reviews: state.reviews.reviewList.reviews
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getReviews: () => dispatch(fetchReviews())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewListContainer);

import React, { Component } from 'react';

import ReviewList from './ReviewList';

import { connect } from 'react-redux';
import { fetchReviewsByUser } from '../../actions/reviewActions';

class ReviewListContainer extends Component {

  componentWillMount() {
    this.props.getReviewsById(this.props.user._id);
  }

  render() {
    return (
      <ReviewList {...this.props} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.profile,
    reviews: state.reviews.reviews
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getReviewsById: id => dispatch(fetchReviewsByUser(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewListContainer);

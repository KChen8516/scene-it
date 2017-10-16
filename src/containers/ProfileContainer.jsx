import React, { Component } from 'react';

import Profile from '../components/Profile';

import { connect } from 'react-redux';
import { fetchReviews } from '../actions/reviewActions';

declare var $:any;

class ProfileContainer extends Component {

  componentWillMount() {
    this.props.getReviews();
  }

  componentDidMount() {
    // Initialize Materialize tabs
    $('ul.tabs').tabs();
  }

  render() {
    if (this.props.reviews === 0) {
      return <h1>No Reviews</h1>
    }
    return (
      <Profile reviews={this.props.reviews} />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: state.reviews.reviewList.reviews
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getReviews: () => dispatch(fetchReviews())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

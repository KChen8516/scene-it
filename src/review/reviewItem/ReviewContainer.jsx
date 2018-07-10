import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Review from './Review';
import { fetchReview } from '../../actions/reviewActions';
import { getReview, getUserProfile } from '../../reducers';

class ReviewContainer extends Component {

  componentWillMount() {
    this.props.fetchReview(this.props.match.params.id);
  }

  componentDidMount() {
    // react-router v4 currently preserves scroll position between routes
    window.scrollTo(0, 0);
  }

  render() {
    return <Review {...this.props} />;
  }
}

ReviewContainer.propTypes = {
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    user: getUserProfile(state),
    review: getReview(state)
  }
}

// You can use concise obj notation for arrow functions in an object. (ES2015)
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchReview(id) {
    dispatch(fetchReview(id))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);

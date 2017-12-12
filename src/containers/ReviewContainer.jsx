import React, { Component } from 'react';
import { connect } from 'react-redux';

import Review from '../components/Review';
import { fetchReview } from '../actions/reviewActions';

class ReviewContainer extends Component {

  constructor() {
    super();
    this.state = {review: ''}
  }

  componentWillMount() {
    let review = this.props.fetchReview(this.props.match.params.id);
    console.log(review);
    this.setState({
      review: review
    });
  }

  componentDidMount() {

  }

  render() {
    console.log(this.state);
    return <Review />;
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchReview: id => dispatch(fetchReview(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);

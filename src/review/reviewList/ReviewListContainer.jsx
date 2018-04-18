import React, { Component } from 'react';

import ReviewList from './ReviewList';

import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/reviewActions';

class ReviewListContainer extends Component {

  constructor() {
    super();
    this.state = {
      stuff: [
        {id: 123, movieTitle: 'Moana', pros: [{id:111, text:'kewl'}], cons: [{id:222,text:'Every so often'}], other: []},
        {id: 321, movieTitle: 'Star Wars: The Last Jedi', pros: [], cons: [{id:999,text:'Horatio Sanz'},{id:102,text:'A part of your world'}], other: []},
        {id: 432, movieTitle: 'Grand Budapest Hotel', pros: [], cons: [], other: [{id:555,text:'Accidental Wes Anderson'}]},
        {id: 555, movieTitle: '2148098fasfdjlk3', pros: [], cons: [], other: []},
      ]
    }
  }

  componentWillMount() {
    console.log('Fetching Reviews...');
    this.props.getReviews();
  }

  render() {
    return (
      <ReviewList reviews={this.props.reviews} stuff={this.state.stuff} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ReviewListContainer);

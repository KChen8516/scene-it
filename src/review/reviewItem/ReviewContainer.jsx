import React, { Component } from 'react';
import { connect } from 'react-redux';

import Review from './Review';
import { fetchReview } from '../../actions/reviewActions';

class ReviewContainer extends Component {

  constructor() {
    super();
    this.state = {
      stuff: {
        id: 123, 
        movieTitle: 'Moana', 
        pros: [{id:111, text:'kewl'}, {id:999, text:'Ingredients: Corns, Vegetable Oil, (contains one or more of the following: Canada or Safflower Oil) and Salt.'}], 
        cons: [{id:222,text:'Every so often'}], 
        other: [{id:1234, text:`)($_!)@!#*@#5(*%!345@#$@$!_142#(2!45@#$3*`}, {id:123412, text:'LOREMIPSUMMECHANICALSALTVERITASIUMMAINVEINIUM'}, {id:5431324, text:'Twist up product. Apply to underarms only. Use daily for best results.'}]
      }
    }
  }

  componentWillMount() {
    this.props.fetchReview(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    return <Review review={this.props.reviewText} stuff={this.state.stuff}/>;
  }
}

const mapStateToProps = state => {
  return {
    reviewText: state.reviews.fetchedReview.reviewText
  }
}

// You can use concise obj notation for arrow functions in an object. (ES2015)
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchReview(id) {
    dispatch(fetchReview(id))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer);

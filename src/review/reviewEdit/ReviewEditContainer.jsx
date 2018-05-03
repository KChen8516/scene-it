import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReview } from '../../actions/reviewActions';

import EditReviewFormik from './ReviewEdit';

class ReviewEditContainer extends Component {

    componentWillMount() {
        this.props.fetchReview(this.props.match.params.id);
    }

    render() {
        return <EditReviewFormik {...this.props} />
    }

}

const mapStateToProps = state => {
    return {
        id: state.reviews.fetchedReview.id,
        movieTitle: state.reviews.fetchedReview.movieTitle,
        pros: state.reviews.fetchedReview.pros,
        cons: state.reviews.fetchedReview.cons,
        other: state.reviews.fetchedReview.other,
        error: state.reviews.fetchedReview.error,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchReview: id => dispatch(fetchReview(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewEditContainer);
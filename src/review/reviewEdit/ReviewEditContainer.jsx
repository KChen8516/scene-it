import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReview } from '../../actions/reviewActions';
import { getReview } from '../../reducers';

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
        review: getReview(state),
        error: state.reviews.fetchedReview.error,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchReview: id => dispatch(fetchReview(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewEditContainer);
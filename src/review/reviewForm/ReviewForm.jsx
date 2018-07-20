import React, { Component } from 'react';
import { findIndex } from 'lodash';
import { withFormik } from 'formik';

import CommentListForm from '../../commentlist/CommentListForm';
import SearchBar from '../../movies/SearchBar';
import { createReviewAPI } from '../../actions/reviewActions';

import { MDCTextField } from '@material/textfield/dist/mdc.textfield.min';
import '@material/textfield/dist/mdc.textfield.min.css';
import './ReviewForm.css';

import { TMDB_IMAGE_URL } from '../../config';

class ReviewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pros: [],
      cons: [],
      other: [],
      errors: {}
    };

    this.addConComment = this.addConComment.bind(this);
    this.addProComment = this.addProComment.bind(this);
    this.addOtherComment = this.addOtherComment.bind(this);
    this.setMovie = this.setMovie.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }

  componentDidMount() {
    this.scoreField = new MDCTextField(document.querySelector('.mdc-text-field--dense'));
  }

  componentDidUpdate() {
    // console.log('ComponentDidUpdate', this.state);
  }

  componentWillReceiveProps(nextProps) {
    // Reset the state of the rest of the form
    if (nextProps.status) {
      if (nextProps.status.type === 'success') {
        this.setState({ pros: [] });
        this.setState({ cons: [] });
        this.setState({ other: [] });
        nextProps.setStatus(null);
      } else if (nextProps.status.type === 'error') {
        // capture error messages
        this.setState({ errors: nextProps.status.data });
      }
    }
  }

  submitReview(e) {
    // Map state values to form prop values for submission by Formik
    this.props.values.pros = [...this.state.pros];
    this.props.values.cons = [...this.state.cons];
    this.props.values.other = [...this.state.other];
    this.props.values._id = this.props.user._id;
    this.props.handleSubmit(e);
  }

  setMovie(movie) {
    this.props.values.movieTitle = movie.title;
    this.props.values.backdropPath = `${TMDB_IMAGE_URL}${movie.backdrop_path}`;
    this.props.values.posterPath = `${TMDB_IMAGE_URL}${movie.poster_path}`;
    this.props.values.tmdbId = movie.id;
  }

  addProComment(newComment) {
    this.setState({ pros: [...this.state.pros, newComment] });
  }

  addConComment(newComment) {
    this.setState({ cons: [...this.state.cons, newComment] });
  }

  addOtherComment(newComment) {
    this.setState({ other: [...this.state.other, newComment] });
  }

  editComment(arr, comment) {
    switch (arr) {
      case 'pros':
        let p = findIndex(this.state.pros, { id: comment.id });
        if (p >= 0) {
          let arr = this.state.pros;
          arr.splice(p, 1, comment);
          this.setState({ pros: arr });
        }
        break;
      case 'cons':
        let c = findIndex(this.state.cons, { id: comment.id });
        if (c >= 0) {
          let arr = this.state.cons;
          arr.splice(c, 1, comment);
          this.setState({ cons: arr });
        }
        break;
      case 'other':
        let o = findIndex(this.state.other, { id: comment.id });
        if (o >= 0) {
          let arr = this.state.other;
          arr.splice(o, 1, comment);
          this.setState({ other: arr });
        }
        break;
      default:
        break;
    }
  }

  deleteComment(arr, id) {
    switch (arr) {
      case 'pros':
        let p = findIndex(this.state.pros, { id: id });
        if (p >= 0) {
          let arr = this.state.pros;
          arr.splice(p, 1);
          this.setState({ pros: arr });
        }
        break;
      case 'cons':
        let c = findIndex(this.state.cons, { id: id });
        if (c >= 0) {
          let arr = this.state.cons;
          arr.splice(c, 1);
          this.setState({ cons: arr });
        }
        break;
      case 'other':
        let o = findIndex(this.state.other, { id: id });
        if (o >= 0) {
          let arr = this.state.other;
          arr.splice(o, 1);
          this.setState({ other: arr });
        }
        break;
      default:
        break;
    }
  }

  render() {
    // console.log('ReviewForm props', this.props);
    const { errors } = this.state;

    return (
      <div className="ReviewFormPage">
        {/* Navbar button */}
        <span className="SubmitReviewForm" onClick={this.submitReview}>
          Save
        </span>

        {/* Search for a movie from TMDB */}
        <SearchBar selectMovie={this.setMovie} />

        <div className="mdc-layout-grid" style={{ paddingTop: 0 }}>
          <div className="mdc-layout-grid__inner">
            {/* Review Score Input */}
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
              <div
                className="mdc-text-field mdc-text-field--outlined mdc-text-field--dense"
                style={{ width: '20%', marginTop: 0 }}
              >
                <input
                  type="text"
                  name="score"
                  onChange={this.props.handleChange}
                  value={this.props.values.score}
                  id="score-outlined"
                  className="mdc-text-field__input"
                  maxLength="4"
                  style={{ textAlign: 'center' }}
                />
                <label htmlFor="score-outlined" className="mdc-floating-label">
                  Score
                </label>
                <div className="mdc-notched-outline">
                  <svg>
                    <path className="mdc-notched-outline__path" />
                  </svg>
                </div>
                <div className="mdc-notched-outline__idle" />
              </div>
              {errors.score && (
                <div>
                  <span className="InvalidInput">{errors.score}</span>
                </div>
              )}
            </div>

            {/* Pros Comment List */}
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
              <CommentListForm
                title="Pros"
                placeholder="I definitely loved..."
                handleAddComment={this.addProComment}
                handleEditComment={this.editComment.bind(this, 'pros')}
                handleDeleteComment={this.deleteComment.bind(this, 'pros')}
                comments={this.state.pros}
                materialIcon="favorite"
              />
            </div>

            {/* Cons Comment List */}
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
              <CommentListForm
                title="Cons"
                placeholder="I deeply hated..."
                handleAddComment={this.addConComment}
                handleEditComment={this.editComment.bind(this, 'cons')}
                handleDeleteComment={this.deleteComment.bind(this, 'cons')}
                comments={this.state.cons}
                materialIcon="error"
              />
            </div>

            {/* Others Comment List */}
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
              <CommentListForm
                title="Other"
                placeholder="I noticed..."
                handleAddComment={this.addOtherComment}
                handleEditComment={this.editComment.bind(this, 'other')}
                handleDeleteComment={this.deleteComment.bind(this, 'other')}
                comments={this.state.other}
                materialIcon="lightbulb_outline"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const ReviewFormik = withFormik({
  mapPropsToValues: props => {
    return {
      score: ''
    };
  },
  handleSubmit: (values, { props, setSubmitting, resetForm, setStatus }) => {
    createReviewAPI(values).then(
      success => {
        console.log('Successfully submitted review.', success);
        // Reset form prop values
        resetForm();
        // Set form status for component state
        setStatus({ type: 'success' });
        setSubmitting(false);
        props.history.push(`/review/${success.data._id}`);
      },
      error => {
        setStatus({ type: 'error', data: error.response.data });
        setSubmitting(false);
      }
    );
  }
})(ReviewForm);

export default ReviewFormik;

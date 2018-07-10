import React, { Component } from 'react';
import { updateReview } from '../../actions/reviewActions';
import { withFormik } from 'formik';
import { findIndex } from 'lodash';

import CommentListForm from '../../commentlist/CommentListForm';

import { MDCTextField } from '@material/textfield/dist/mdc.textfield.min';
import { MDCFloatingLabel } from '@material/floating-label/dist/mdc.floatingLabel.min';
import '@material/textfield/dist/mdc.textfield.min.css';

class ReviewEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieTitle: this.props.review.movieTitle,
      score: this.props.review.score,
      pros: this.props.review.pros,
      cons: this.props.review.cons,
      other: this.props.review.other,
      dirty: false
    };
    this.addProComment = this.addProComment.bind(this);
    this.addConComment = this.addConComment.bind(this);
    this.addOtherComment = this.addOtherComment.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
  }

  componentDidMount() {
    this.movieTitleField = new MDCTextField(document.querySelector('.mdc-text-field'));
    this.scoreField = new MDCTextField(document.querySelector('.mdc-text-field--outlined'));
    this.titleLabel = new MDCFloatingLabel(document.querySelector('.mdc-floating-label'));
    this.titleLabel.float(true);
  }

  componentWillReceiveProps(nextProps) {
    this.props.values.movieTitle = nextProps.review.movieTitle;
    this.props.values.score = nextProps.review.score;

    // float the score label if there's a score
    if(this.props.values.score !== '' ) {
        this.scoreLabel = new MDCFloatingLabel(document.querySelector('.ScoreLabel'));
        // check if the label is already floated
        if(!this.scoreLabel.root_.className.includes('mdc-floating-label--float-above')) {
            this.scoreLabel.float(true);
            // TODO: the focus and blur animations are too visible
            // focus and blur the scoreField to fix the label style
            this.scoreField.input_.focus();
            this.scoreField.input_.blur();
        }
    }

    this.setState({ pros: nextProps.review.pros });
    this.setState({ cons: nextProps.review.cons });
    this.setState({ other: nextProps.review.other });
  }

  addProComment(newComment) {
    this.setState({ pros: [...this.state.pros, newComment] });
    this.setState({ dirty: true });
  }

  addConComment(newComment) {
    this.setState({ cons: [...this.state.cons, newComment] });
    this.setState({ dirty: true });
  }

  addOtherComment(newComment) {
    this.setState({ other: [...this.state.other, newComment] });
    this.setState({ dirty: true });
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
    this.setState({ dirty: true });
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
    this.setState({ dirty: true });
  }

  submitUpdate(e) {
    this.props.values.pros = this.state.pros;
    this.props.values.cons = this.state.cons;
    this.props.values.other = this.state.other;
    this.props.handleSubmit(e);
  }

  render() {
    return (
      <div className="EditReview mdc-layout-grid">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
            <div className="mdc-text-field" style={{ width: '100%' }}>
              <input
                type="text"
                name="movieTitle"
                onChange={this.props.handleChange}
                value={this.props.values.movieTitle || ''}
                className="mdc-text-field__input"
                id="movie-title-field"
              />
              <label className="mdc-floating-label" htmlFor="movie-title-field">
                Movie Title
              </label>
              <div className="mdc-line-ripple" />
            </div>
          </div>

          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
            <div
              className="mdc-text-field mdc-text-field--outlined mdc-text-field--dense"
              style={{ width: '20%', marginTop: 0 }}
            >
              <input
                type="text"
                name="score"
                onChange={this.props.handleChange}
                value={this.props.values.score || ''}
                id="score-outlined"
                className="mdc-text-field__input"
                maxLength="4"
                style={{ textAlign: 'center' }}
              />
              <label htmlFor="score-outlined" className="ScoreLabel mdc-floating-label">
                Score
              </label>
              <div className="mdc-notched-outline">
                <svg>
                  <path className="mdc-notched-outline__path" />
                </svg>
              </div>
              <div className="mdc-notched-outline__idle" />
            </div>
            {/* {errors.score && (
              <div>
                <span className="InvalidInput">{errors.score}</span>
              </div>
            )} */}
          </div>

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

          {this.props.dirty || this.state.dirty ? (
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
              <button
                className="mdc-button"
                onClick={this.submitUpdate}
                style={{ color: 'white', backgroundColor: '#28a745' }}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const EditReviewFormik = withFormik({
  mapPropsToValues: props => {
    return {
      movieTitle: '',
      score: '',
      pros: [],
      cons: [],
      other: []
    };
  },
  handleSubmit: (values, { props }) => {
    let payload = { ...values, id: props.review.id };

    updateReview(payload).then(
      success => {
        console.log('Successfully updated');
        props.history.push(`/review/${props.review.id}`);
      },
      error => {
        console.log('Something went wrong updating.');
      }
    );
  }
})(ReviewEdit);

export default EditReviewFormik;

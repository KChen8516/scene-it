import React, { Component } from 'react';
import { findIndex } from 'lodash';
import { withFormik } from 'formik';

import CommentListForm from '../../components/CommentListForm';
import { createReviewAPI } from '../../actions/reviewActions';

import { MDCTextField } from '@material/textfield/dist/mdc.textfield.min';
import '@material/textfield/dist/mdc.textfield.min.css';
import './ReviewForm.css';

// Presentational control form component for reviews
class ReviewForm extends Component {

  constructor(props) {
    super(props);
    // console.log('ReviewForm props', this.props);
    this.state = {
      pros: [],
      cons: [],
      other: []
    };
    this.addConComment = this.addConComment.bind(this);
    this.addProComment = this.addProComment.bind(this);
    this.addOtherComment = this.addOtherComment.bind(this);
    this.submitReview = this.submitReview.bind(this);
  }

  componentDidMount() {
    this.titleField = new MDCTextField(document.querySelector('.mdc-text-field'));
  }

  componentDidUpdate() {
    // console.log('ComponentDidUpdate', this.state);
  }

  componentWillReceiveProps(nextProps) {
    // Reset the state of the rest of the form
    if(nextProps.status === 'Success') {
      this.setState({pros: []});
      this.setState({cons: []});
      this.setState({other: []});
      nextProps.setStatus(null);
    }
  }

  submitReview(e) {
    console.log('Submitting Review', this.state);
    // Map state values to form prop values for submission by Formik
    this.props.values.pros = [...this.state.pros];
    this.props.values.cons = [...this.state.cons];
    this.props.values.other = [...this.state.other];
    this.props.values._id = this.props.user._id;
    this.props.handleSubmit(e);
  }

  addProComment(newComment) {
    this.setState({pros: [...this.state.pros, newComment]});
  }

  addConComment(newComment) {
    this.setState({cons: [...this.state.cons, newComment]});
  }

  addOtherComment(newComment) {
    this.setState({other: [...this.state.other, newComment]});
  }

  editComment(arr, comment) {
    switch(arr) {
      case 'pros':
        let p = findIndex(this.state.pros, {id: comment.id});
        if(p >= 0) {
          let arr = this.state.pros;
          arr.splice(p,1,comment);
          this.setState({pros: arr});
        }
        break;
      case 'cons':
        let c = findIndex(this.state.cons, {id: comment.id});
        if(c >= 0) {
          let arr = this.state.cons;
          arr.splice(c,1,comment);
          this.setState({cons: arr});
        }
        break;
      case 'other':
        let o = findIndex(this.state.other, {id: comment.id});
        if(o >= 0) {
          let arr = this.state.other;
          arr.splice(o,1,comment);
          this.setState({other: arr});
        }
        break;
      default: break;
    }
  }

  deleteComment(arr, id) {
    switch(arr) {
      case 'pros':
        let p = findIndex(this.state.pros, {id: id});
        if(p >= 0) {
          let arr = this.state.pros;
          arr.splice(p,1);
          this.setState({pros: arr});
        }
        break;
      case 'cons':
        let c = findIndex(this.state.cons, {id: id});
        if(c >= 0) {
          let arr = this.state.cons;
          arr.splice(c,1);
          this.setState({cons: arr});
        }
        break;
      case 'other':
        let o = findIndex(this.state.other, {id: id});
        if(o >= 0) {
          let arr = this.state.other;
          arr.splice(o,1);
          this.setState({other: arr});
        }
        break;
      default: break;
    }
  }

  render() {
    console.log('ReviewForm props', this.props);
    return (
      <div className="ReviewFormPage">
        {/* Navbar button */}
        <span className="SubmitReviewForm" onClick={this.submitReview}>Save</span>
        <div className="mdc-layout-grid" style={{paddingTop:0}}>
          <div className="mdc-layout-grid__inner">
            {/* Submit Review Form */}
                
              <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                <div className="mdc-text-field" style={{width:'100%'}}>
                  <input
                    type="text"
                    name="movieTitle"
                    onChange={this.props.handleChange}
                    value={this.props.values.movieTitle}
                    className="mdc-text-field__input"
                    id="movie-title-field"
                  />
                  <label className="mdc-floating-label" htmlFor="movie-title-field">Movie Title</label>
                  <div className="mdc-line-ripple"></div>
                </div>
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

              {/* {!this.props.isSubmitting ? <span>Not submitted</span> : <span>Submitting...</span>} */}
            </div>
        </div>
      </div>
    );
  }
}

const ReviewFormik = withFormik({
  mapPropsToValues: props => {
    return {
      movieTitle: '',
    }
  },
  handleSubmit: (values, { props, setSubmitting, resetForm, setStatus }) => {    
    createReviewAPI(values).then(
      success => {
        console.log('Successfully submitted review.');
        // Reset form prop values
        resetForm();
        // Set form status for component state
        setStatus('Success');
        setSubmitting(false);
      },
      error => {
        console.log('Error');
      }
    );
  }
})(ReviewForm);

export default ReviewFormik;

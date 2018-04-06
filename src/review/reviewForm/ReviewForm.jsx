import React, { Component } from 'react';
import { findIndex } from 'lodash';
import { withFormik } from 'formik';

import CommentListForm from '../../components/CommentListForm';

import '@material/textfield/dist/mdc.textfield.min.css';
import './ReviewForm.css';

// Presentational control form component for reviews
class ReviewForm extends Component {

  constructor(props) {
    super(props);
    console.log('ReviewForm props', this.props);
    this.state = {
      pros: [],
      cons: [],
      other: []
    };
    this.addConComment = this.addConComment.bind(this);
    this.addProComment = this.addProComment.bind(this);
    this.addOtherComment = this.addOtherComment.bind(this);
  }

  componentDidUpdate() {
    // console.log('ComponentDidUpdate', this.state);
  }

  submitReview(e) {
    console.log('Submitting Review', this.state);
    let reviewData = this.state;
    this.props.submitReview(reviewData);
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
    return (
      <div className="ReviewFormPage">
        {/* Navbar button */}
        {/* <span className="SubmitReviewForm" onClick={this.submitReview.bind(this)}>Save</span> */}
        <div className="mdc-layout-grid" style={{paddingTop:0}}>
          <div className="mdc-layout-grid__inner">
            {/* Submit Review Form */}
                
              <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
                <div className="mdc-text-field" style={{width:'100%'}}>
                  <input
                    type="text"
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

            </div>
        </div>
      </div>
    );
  }
}

const ReviewFormik = withFormik({
  handleSubmit: values => {
    console.log(values);
  }
})(ReviewForm);

export default ReviewForm;

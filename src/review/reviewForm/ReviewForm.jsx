import React, { Component } from 'react';

import CommentListForm from '../../components/CommentListForm';

import './ReviewForm.css';
import ProfileImage from '../../assets/ariana-grande.jpg';

// Presentational control form component for reviews
class ReviewForm extends Component {

  constructor() {
    super();
    this.state = {
      movieTitle: '',
      pros: [],
      cons: [],
      other: []
    };
  }

  componentDidUpdate() {
    console.log('ComponentDidUpdate', this.state);
  }

  handleMovieTitleChange(e) {
    this.setState({movieTitle: e.target.value});
  }

  submitReview(e) {
    console.log('Submitting Review', this.state);
    let reviewData = this.state;
    this.props.submitReview(reviewData);
  }

  addProComment(newComment) {
    console.log(newComment);
    console.log(this.state);
    this.setState({
      pros: [...this.state.pros, newComment]
    });
  }

  addConComment(newComment) {
    this.setState({
      cons: [...this.state.cons, newComment]
    });
  }

  addOtherComment(newComment) {
    this.setState({
      other: [...this.state.other, newComment]
    });
  }

  render() {
    return (
      <div className="ReviewFormPage">
        {/* Navbar button */}
        <span className="SubmitReviewForm" onClick={this.submitReview.bind(this)}>Save</span>
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="FormHeader mdc-layout-grid__cell">
              <div>
                <img src={ProfileImage} className="ImageCircle" alt="profile"/>
                <h1 className="mdc-typography--caption Username">Ariana Grande</h1>
              </div>
            </div>
              {/* Submit Review Form */}
              <div className="ReviewForm mdc-layout-grid__cell mdc-form-field">
                
                  <div className="mdc-layout-grid__inner">
                    <div className="mdc-layout-grid__cell">
                      <div className="mdc-text-field">
                        <input className="mdc-text-field__input"
                               id="my-text-field" type="text"
                               value={this.state.movieTitle}
                               onChange={this.handleMovieTitleChange.bind(this)}
                        />
                        <label className="mdc-text-field__label" htmlFor="my-text-field">Movie Title</label>
                        <div className="mdc-text-field__bottom-line"></div>
                      </div>
                    </div>

                    <div className="mdc-layout-grid__cell--span-12-phone">
                        <CommentListForm
                            title="Pros"
                            placeholder="I definitely loved..."
                            handleCommentChange={this.addProComment.bind(this)}
                            comments={this.state.pros}
                        />
                    </div>

                    <div className="mdc-layout-grid__cell--span-12-phone">
                        <CommentListForm 
                            title="Cons" 
                            placeholder="I deeply hated..."
                            handleCommentChange={this.addConComment.bind(this)}
                            comments={this.state.cons}
                        />
                    </div>

                    <div className="mdc-layout-grid__cell--span-12-phone">
                        <CommentListForm 
                            title="Other" 
                            placeholder="I noticed..."
                            handleCommentChange={this.addOtherComment.bind(this)}
                            comments={this.state.other}
                        />
                    </div>

                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewForm;

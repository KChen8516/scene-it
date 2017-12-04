import React, { Component } from 'react';

import '../styles/ReviewForm.css';
import ProfileImage from '../assets/ariana-grande.jpg';

// Presentational control form component for reviews
class ReviewForm extends Component {

  constructor() {
    super();
    this.state = {
      movieTitle: '',
      items: [],
      longReview: ''
    };
  }

  handleMovieTitleChange(e) {
    this.setState({movieTitle: e.target.value});
  }

  handleItemsChange(e) {
    console.log('Typing Item');
  }

  handleLongReviewChange(e) {
    this.setState({longReview: e.target.value})
  }

  submitReview(e) {
    console.log('Submitting Review', this.state);
    let reviewData = this.state;
    this.props.submitReview(reviewData);
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
              <div className="ReviewForm mdc-layout-grid__cell mdc-form-field">
                {/* Submit Review Form */}
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
                    <div className="mdc-layout-grid__cell">
                      <div className="CommentField mdc-text-field">
                        <i className="LikeIcon material-icons">done</i>
                        <i className="DislikeIcon material-icons">clear</i>
                        <input className="mdc-text-field__input"
                               type="text" id="list-field"
                               placeholder="What did you like/dislike?"
                               value={this.state.items}
                               onChange={this.handleItemsChange.bind(this)}
                        />
                      </div>
                    </div>
                    <div className="AddSection mdc-layout-grid__cell">
                      <i className="AddIcon material-icons">add_circle_outline</i>
                      <p className="AddLabel">Add another like/dislike</p>
                    </div>
                    <div className="LongReview mdc-text-field mdc-text-field--multiline mdc-text-field--fullwidth mdc-layout-grid__cell">
                      <textarea className="mdc-text-field__input"
                                placeholder="Write your movie review"
                                rows="8" cols="30"
                                aria-label="Full-Width multiline textfield"
                                value={this.state.longReview}
                                onChange={this.handleLongReviewChange.bind(this)}>
                      </textarea>
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

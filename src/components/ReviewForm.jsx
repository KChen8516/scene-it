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

  }

  handleItemsChange(e) {

  }

  handleLongReviewChange(e) {

  }

  submitReview() {
    console.log('Submitting Review', this.state);
  }

  render() {
    return (
      <div className="ReviewFormPage">
        <span className="SubmitReviewForm" onClick={this.submitReview}>Save</span>
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
                               onChange={this.handleMovieTitleChange}
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
                               onChange={this.handleItemsChange}
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
                                onChange={this.handleLongReviewChange}>
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

// const ReviewForm = (location, props) => (
//   <div className="ReviewFormPage">
//     <div className="mdc-layout-grid">
//       <div className="mdc-layout-grid__inner">
//         <div className="FormHeader mdc-layout-grid__cell">
//           <div>
//             <img src={ProfileImage} className="ImageCircle" alt="profile"/>
//             <h1 className="mdc-typography--caption Username">Ariana Grande</h1>
//           </div>
//         </div>
//         <div className="ReviewForm mdc-layout-grid__cell mdc-form-field">
//           {/* Submit Review Form */}
//           <form>
//             <div className="mdc-layout-grid__inner">
//               <div className="mdc-layout-grid__cell">
//                 <div className="mdc-text-field">
//                   <input className="mdc-text-field__input" id="my-text-field" type="text" />
//                   <label className="mdc-text-field__label" htmlFor="my-text-field">Movie Title</label>
//                   <div className="mdc-text-field__bottom-line"></div>
//                 </div>
//               </div>
//               <div className="mdc-layout-grid__cell">
//                 {/*<i className="mdc-icon-toggle material-icons ThumbUpIcon" role="button"
//                    aria-label="Add to favorites" tabIndex="0"
//                    data-toggle-on='{"cssClass": "Toggled"}'
//                    data-toggle-off='{"cssClass": "NotToggled"}'>
//                   thumb_up
//                 </i>
//                 <button className="ThumbDownIcon mdc-fab mdc-fab--mini material-icons" aria-label="Favorite">
//                   <span className="mdc-fab__icon">thumb_down</span>
//                 </button>*/}
//                 <div className="CommentField mdc-text-field">
//                   <i className="LikeIcon material-icons">done</i>
//                   <i className="DislikeIcon material-icons">clear</i>
//                   <input type="text" id="list-field" className="mdc-text-field__input" placeholder="What did you like/dislike?"/>
//                 </div>
//               </div>
//               <div className="AddSection mdc-layout-grid__cell">
//                 <i className="AddIcon material-icons">add_circle_outline</i>
//                 <p className="AddLabel">Add another like/dislike</p>
//               </div>
//               <div className="LongReview mdc-text-field mdc-text-field--multiline mdc-text-field--fullwidth mdc-layout-grid__cell">
//                 <textarea className="mdc-text-field__input"
//                           placeholder="Write your movie review"
//                           rows="8" cols="30"
//                           aria-label="Full-Width multiline textfield"></textarea>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// );

export default ReviewForm;

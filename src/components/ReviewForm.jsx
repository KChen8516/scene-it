import React from 'react';

import '../styles/ReviewForm.css';
import ProfileImage from '../assets/ariana-grande.jpg';

const ReviewForm = (location) => (
  <div className="ReviewFormPage">
    <div className="mdc-layout-grid">
      <div className="mdc-layout-grid__inner">
        <div className="FormHeader mdc-layout-grid__cell">
          <div>
            <img src={ProfileImage} className="ImageCircle" alt="profile"/>
            <h1 className="mdc-typography--caption Username">Ariana Grande</h1>
          </div>
        </div>
        <div className="ReviewForm mdc-layout-grid__cell mdc-form-field">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-textfield mdc-layout-grid__cell">
              <input type="text" id="my-textfield" className="mdc-textfield__input" />
              <label className="mdc-textfield__label" htmlFor="my-textfield">Movie Title</label>
            </div>
            <div className="mdc-layout-grid__cell">
              <i className="mdc-icon-toggle material-icons ThumbUpIcon" role="button"
                 aria-label="Add to favorites" tabIndex="0"
                 data-toggle-on='{"cssClass": "Toggled"}'
                 data-toggle-off='{"cssClass": "NotToggled"}'>
                thumb_up
              </i>
              <button className="ThumbDownIcon mdc-fab mdc-fab--mini material-icons" aria-label="Favorite">
                <span className="mdc-fab__icon">thumb_down</span>
              </button>
              <div className="CommentField mdc-textfield">
                <input type="text" id="list-field" className="mdc-textfield__input" placeholder="What did you like/dislike?"/>
              </div>
              <div className="AddSection mdc-layout-grid__cell">
                <i className="AddIcon material-icons">add_circle_outline</i>
                <p className="AddLabel">Add another like/dislike</p>
              </div>
            </div>
            <div className="mdc-textfield mdc-textfield--multiline mdc-textfield--fullwidth mdc-layout-grid__cell">
              <textarea className="mdc-textfield__input"
                        placeholder="Write your movie review"
                        rows="8" cols="30"
                        aria-label="Full-Width multiline textfield"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ReviewForm;

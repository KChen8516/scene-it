import React from 'react';
// import PropTypes from 'prop-types';

import './Review.css';
import MoviePoster from '../../assets/wall-e.jpg';
import ProfileImage from '../../assets/ariana-grande.jpg';
import EditIcon from '../../assets/icon-edit.svg';

const Review = (props) => (
  <div className="ReviewPage mdc-layout-grid">
    <div className="mdc-layout-grid__inner">
      <div className="PosterSection mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <img className="PosterImage" src={MoviePoster} alt="Wall-e" />
        <img className="EditReviewIcon" src={EditIcon} alt="Edit Icon" />
        <div className="MovieTitleSection">
          <h1 className="MovieTitleText mdc-typography--headline">WALL-E (2008)</h1>
        </div>
      </div>
      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-1">
            <img className="ProfileBadge" src={ProfileImage} alt="profile" />
          </div>
          <div className="ReviewInfo mdc-layout-grid__cell mdc-layout-grid__cell--span-2 mdc-layout-grid__cell--align-middle">
            <p className="ReviewUsername mdc-typography--body2">Ariana Grande</p>
            <p className="ReviewPublish mdc-typography--caption">Published on 09/20/17</p>
          </div>
        </div>
      </div>
      <div className="ReviewContent mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <p className="ReviewText mdc-typography--body1">
          {props.review}
        </p>
      </div>
    </div>
  </div>
)

export default Review;

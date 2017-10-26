import React from 'react';
// import PropTypes from 'prop-types';

import '../styles/Review.css';
import MoviePoster from '../assets/wall-e.jpg';
import ProfileImage from '../assets/ariana-grande.jpg';
import EditIcon from '../assets/icon-edit.svg';

const Review = () => (
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
        <p className="ReviewText mdc-typography--body1">Ingrid Thorburn (Aubrey Plaza) is an unhinged social media stalker with a history of confusing "likes" for meaningful relationships. Taylor Sloane (Elizabeth Olsen) is an Instagram-famous "influencer" whose perfectly curated, boho-chic lifestyle becomes Ingrid's latest obsession. When Ingrid moves to LA and manages to insinuate herself into the social media star's life, their relationship quickly goes from #BFF to #WTF. Built around a brilliantly disarming performance from Aubrey Plaza, Ingrid Goes West (winner of the Waldo Salt Screenwriting Award at Sundance) is a savagely hilarious dark comedy that satirizes the modern world of social media and proves that being #perfect isn't all it's cracked up to be.</p>
      </div>
    </div>
  </div>
)

export default Review;

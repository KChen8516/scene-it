import React from 'react';
import { Link }  from 'react-router-dom';

import '../styles/ReviewList.css'
import ProfileImage from '../assets/ariana-grande.jpg';

const ReviewList = () => (
  <div className="ReviewListPage mdc-layout-grid">
    <div className="mdc-layout-grid__inner">
      <div className="mdc-layout-grid__cell">
        <div className="ProfileHeader">
          <img src={ProfileImage} alt="header"/>
          <h3>Ariana Grande</h3>
          <p>Member since 2017 | 5 Reviews</p>
        </div>
        {/*TODO: Rewrite into its own List component */}
        <div className="ReviewList">
          {/* Card One */}
          <Link to="/review" className="ReviewListLink">
            <div className="ReviewItem mdc-card">
              <section className="ReviewHeader mdc-card__primary">
                <h1 className="mdc-card__title mdc-card__title--large">Movie Title</h1>
                <h2 className="mdc-card__subtitle">Published 11/01/2017</h2>
              </section>
              <section className="ReviewText mdc-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </section>
            </div>
          </Link>
          {/* Card Two */}
          <div className="ReviewItem mdc-card">
            <section className="ReviewHeader mdc-card__primary">
              <h1 className="mdc-card__title mdc-card__title--large">Movie Title</h1>
              <h2 className="mdc-card__subtitle">Published 11/01/2017</h2>
            </section>
            <section className="ReviewText mdc-card__supporting-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ReviewList;
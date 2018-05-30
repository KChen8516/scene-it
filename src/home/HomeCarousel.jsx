import React from 'react';

import { Link } from 'react-router-dom';

import './HomeCarousel.css';
import EditIcon from '../assets/icon-edit.svg';

const HomeCarousel = () => {
  return (
    <div className="HomeCarousel">
      <div className="HomePage-1">
        <div className="mdc-layout-grid Callout">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
              <p className="Date">September 20, 2017</p>
              <span className="CalloutHeadline">
                Scene It, review and share your favorite movies with friends.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="HomePage-2">
        <div className="mdc-layout-grid Callout">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
              <p className="Date">September 20, 2017</p>
              <span className="CalloutHeadline">
                Write your own review now!
              </span>
            </div>
          </div>
          <Link to="/reviewform">
            <img className="HomeIcon" src={EditIcon} alt="Edit Icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;

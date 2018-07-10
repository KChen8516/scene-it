import React from 'react';
import { Link } from 'react-router-dom';

import './Review.css';
import MoviePoster from '../../assets/wall-e.jpg';
import EditIcon from '../../assets/icon-edit.svg';

const ItemStyle = {
  minHeight: 40,
  lineHeight: 'normal',
  paddingLeft: 0,
  paddingRight: 0
};

const defaultMessage = {
  fontSize: 14,
  lineHeight: 'normal'
};

const centerContent = {
  display: 'flex',
  alignItems: 'center'
};

const Review = props => (
  <div className="ReviewPage mdc-layout-grid">
    <div className="mdc-layout-grid__inner">
      <div className="PosterSection mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <img className="PosterImage" src={MoviePoster} alt="Wall-e" />
        <Link to={`/review/edit/${props.review.id}`}>
          <img className="EditReviewIcon" src={EditIcon} alt="Edit Icon" />
        </Link>
        <div className="MovieTitleSection">
          <h1 className="MovieTitleText mdc-typography--headline">
            {props.review.movieTitle}
          </h1>
        </div>
      </div>

      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-1">
            <img className="ProfileBadge" src={props.user.image} alt="profile" />
          </div>
          <div
            id="ReviewInfo"
            className="mdc-layout-grid__cell mdc-layout-grid__cell--span-3"
          >
            <p id="ReviewUsername" className="mdc-typography--body2">
              {props.user.displayName}
            </p>
            <p id="ReviewPublish" className="mdc-typography--caption">
              Published on 09/20/17
            </p>
          </div>
        </div>
      </div>

      <div
        id="ReviewScore"
        className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12"
        style={centerContent}
      >
        <h3 style={{ margin: 0 }}>Score: </h3>
        {props.review.score ? (
          <span style={{ marginLeft: 10 }}>{props.review.score}</span>
        ) : (
          <span style={{ marginLeft: 10 }}>N/A</span>
        )}
      </div>

      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <h3 className="mdc-typography--title" style={{ marginTop: 5, marginBottom: 0 }}>
          Pros:
        </h3>
        {props.review.pros && props.review.pros.length > 0 ? (
          <ul className="mdc-list mdc-list--dense mdc-list--non-interactive">
            {props.review.pros.map(pro => (
              <li key={pro.id} className="mdc-list-item" style={ItemStyle}>
                <i
                  className="material-icons mdc-list-item__graphic"
                  style={{ marginRight: 5 }}
                >
                  favorite
                </i>
                {pro.text}
              </li>
            ))}
          </ul>
        ) : (
          <p style={defaultMessage}>Nothing good to say.</p>
        )}
      </div>

      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <h3 className="mdc-typography--title" style={{ marginTop: 5, marginBottom: 0 }}>
          Cons:
        </h3>
        {props.review.cons && props.review.cons.length > 0 ? (
          <ul className="mdc-list mdc-list--dense mdc-list--non-interactive">
            {props.review.cons.map(con => (
              <li key={con.id} className="mdc-list-item" style={ItemStyle}>
                <i
                  className="material-icons mdc-list-item__graphic"
                  style={{ marginRight: 5 }}
                >
                  error
                </i>
                {con.text}
              </li>
            ))}
          </ul>
        ) : (
          <p style={defaultMessage}>Nothing bad to say.</p>
        )}
      </div>

      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <h3 className="mdc-typography--title" style={{ marginTop: 5, marginBottom: 0 }}>
          Other:
        </h3>
        {props.review.other && props.review.other.length > 0 ? (
          <ul className="mdc-list mdc-list--dense mdc-list--non-interactive">
            {props.review.other.map(other => (
              <li key={other.id} className="mdc-list-item" style={ItemStyle}>
                <i
                  className="material-icons mdc-list-item__graphic"
                  style={{ marginRight: 5 }}
                >
                  lightbulb_outline
                </i>
                {other.text}
              </li>
            ))}
          </ul>
        ) : (
          <p style={defaultMessage}>Nothing.</p>
        )}
      </div>
    </div>
  </div>
);

export default Review;

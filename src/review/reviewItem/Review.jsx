import React from 'react';
// import PropTypes from 'prop-types';

import './Review.css';
import MoviePoster from '../../assets/wall-e.jpg';
import ProfileImage from '../../assets/ariana-grande.jpg';
import EditIcon from '../../assets/icon-edit.svg';

const ItemStyle = {
  minHeight: 40,
  lineHeight: 'normal',
  paddingLeft: 0,
  paddingRight: 0
}

const Review = (props) => (
  <div className="ReviewPage mdc-layout-grid">
    <div className="mdc-layout-grid__inner">

      <div className="PosterSection mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <img className="PosterImage" src={MoviePoster} alt="Wall-e" />
        <img className="EditReviewIcon" src={EditIcon} alt="Edit Icon" />
        <div className="MovieTitleSection">
          <h1 className="MovieTitleText mdc-typography--headline">{props.stuff.movieTitle}</h1>
        </div>
      </div>

      <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <div className="mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-1">
            <img className="ProfileBadge" src={ProfileImage} alt="profile" />
          </div>
          <div id="ReviewInfo" className="mdc-layout-grid__cell mdc-layout-grid__cell--span-3">
            <p id="ReviewUsername" className="mdc-typography--body2">Ariana Grande</p>
            <p id="ReviewPublish" className="mdc-typography--caption">Published on 09/20/17</p>
          </div>
        </div>
      </div>

      {props.stuff.pros.length > 0 ?
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
          <h3 className="mdc-typography--title" style={{marginTop:5,marginBottom:0}}>Pros:</h3>
          <ul className="mdc-list mdc-list--dense">
            {props.stuff.pros.map(pro => 
              <li key={pro.id} className="mdc-list-item" style={ItemStyle}>
                <i className="material-icons mdc-list-item__graphic" style={{marginRight:5}}>favorite</i>
                {pro.text}
              </li>
            )}
          </ul>
        </div>
      : null}

      {props.stuff.cons.length > 0 ?
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
          <h3 className="mdc-typography--title" style={{marginTop:5,marginBottom:0}}>Cons:</h3>
          <ul className="mdc-list mdc-list--dense">
            {props.stuff.cons.map(con => 
              <li key={con.id} className="mdc-list-item" style={ItemStyle}>
                <i className="material-icons mdc-list-item__graphic" style={{marginRight:5}}>error</i>
                {con.text}
              </li>
            )}
          </ul>
        </div>
      : null}

      {props.stuff.other.length > 0 ?
        <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
          <h3 className="mdc-typography--title" style={{marginTop:5,marginBottom:0}}>Other:</h3>
          <ul className="mdc-list mdc-list--dense">
            {props.stuff.other.map(other => 
              <li key={other.id} className="mdc-list-item" style={ItemStyle}>
                <i className="material-icons mdc-list-item__graphic" style={{marginRight:5}}>lightbulb_outline</i>
                {other.text}
              </li>
            )}
          </ul>
        </div>
      : null}

      <div className="ReviewContent mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
        <p className="ReviewText mdc-typography--body1">
          {props.review}
        </p>
      </div>

    </div>
  </div>
)

export default Review;

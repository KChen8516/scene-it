import React from 'react';
import { Link }  from 'react-router-dom';

import '@material/card/dist/mdc.card.min.css';
import './ReviewList.css'

const ReviewList = (props) => (
  <div className="ReviewListPage mdc-layout-grid">
    <div className="mdc-layout-grid__inner">
    
      <div className="ProfileHeader mdc-layout-grid__cell--span-12">
        <img src={props.user.image} alt="header"/>
        <h3>{props.user.displayName}</h3>
        <p>Member since 2017 | {props.reviews.length} Reviews</p>
      </div>

      {/*TODO: Rewrite into its own List component */}
      <div className="ReviewList mdc-layout-grid__cell--span-12">

        {props.reviews.map(review =>
          <Link key={review._id} to={`/review/${review._id}`} style={{textDecoration:'none'}}>
            <div className="mdc-card" style={{marginTop:5}}>
              <h2 className="ReviewTitle mdc-typography--subheading2">{review.movieTitle}</h2>
              <span className="ReviewDate mdc-typography--caption">Published on 10/10/2055</span>
              <div id="ReviewContent">
                {review.pros ? <p className="ReviewListContent mdc-typography--body1">Pros: {review.pros.length}</p> : null}
                {review.cons ? <p className="ReviewListContent mdc-typography--body1">Cons: {review.cons.length}</p> : null}
                {review.other ? <p className="ReviewListContent mdc-typography--body1">Other: {review.other.length}</p> : null}
              </div>
            </div>
          </Link>
        )}

      </div>
    </div>
  </div>
)

export default ReviewList;

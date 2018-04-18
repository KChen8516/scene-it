import React from 'react';
import { Link }  from 'react-router-dom';

import '@material/card/dist/mdc.card.min.css';
import './ReviewList.css'
import ProfileImage from '../../assets/ariana-grande.jpg';

const ReviewList = (props) => (
  <div className="ReviewListPage mdc-layout-grid">
    <div className="mdc-layout-grid__inner">
    
      <div className="ProfileHeader mdc-layout-grid__cell--span-12">
        <img src={ProfileImage} alt="header"/>
        <h3>Ariana Grande</h3>
        <p>Member since 2017 | 5 Reviews</p>
      </div>

      {/*TODO: Rewrite into its own List component */}
      <div className="ReviewList mdc-layout-grid__cell--span-12">
        {props.reviews.map(review =>
          <Link key={review._id} to={`/review/${review._id}`} className="ReviewListLink">
            <div className="ReviewItem mdc-card">
              <section className="ReviewHeader mdc-card__primary">
                <h1 className="mdc-card__title mdc-card__title--large">{review.movieTitle}</h1>
              </section>
              <section className="ReviewText mdc-card__supporting-text">
                {review.longReview}
              </section>
            </div>
          </Link>
        )}

        {props.stuff.map(stuff =>
          <Link key={stuff.id} to={`/review/${stuff.id}`} style={{textDecoration:'none'}}>
            <div className="mdc-card" style={{marginTop:5}}>
              <h2 className="ReviewTitle mdc-typography--subheading2">{stuff.movieTitle}</h2>
              <span className="ReviewDate mdc-typography--caption">Published on 10/10/2055</span>
              {stuff.pros ? <p className="ReviewListContent mdc-typography--body1">Pros: {stuff.pros.length}</p> : null}
              {stuff.cons ? <p className="ReviewListContent mdc-typography--body1">Cons: {stuff.cons.length}</p> : null}
              {stuff.other ? <p className="ReviewListContent mdc-typography--body1">Other: {stuff.other.length}</p> : null}
            </div>
          </Link>
        )}

      </div>
    </div>
  </div>
)

export default ReviewList;

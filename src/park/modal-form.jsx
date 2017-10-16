import React from 'react';

const ReviewForm = props => (
  <div id="reviewModal" className="modal">
    <form onSubmit={props.createReview}>
      <div className="modal-content">
        <h5>{props.movieTitle}</h5>
        <div className="row">
           <div className="input-field col s12">
             <textarea
               id="textarea1"
               className="materialize-textarea"
               data-length="120"
               onChange={props.reviewText}
             />
             <label htmlFor="textarea1">Type a review...</label>
           </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="modal-action modal-close waves-effect waves-green btn-flat"
        >
          <input type="submit" value="Save" />
        </a>
      </div>
    </form>
  </div>
);

export default ReviewForm;

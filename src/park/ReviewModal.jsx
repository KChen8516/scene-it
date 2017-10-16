import React, { Component } from 'react';

class ReviewModal extends Component {

  render() {
    return (
      <div id="reviewModal" className="modal">
        <div className="modal-content">
          <h5>Review Modal</h5>
          <div className="row">
             <form className="col s12">
               <div className="row">
                 <div className="input-field col s12">
                   <textarea id="textarea1" className="materialize-textarea" data-length="120"></textarea>
                   <label htmlFor="textarea1">Review</label>
                 </div>
               </div>
             </form>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Save</a>
        </div>
      </div>
    );
  }
}

export default ReviewModal;

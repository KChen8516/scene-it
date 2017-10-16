import React, { Component } from 'react';

class NoteModal extends Component {

  constructor() {
    super();

    this.state = {
      pros: [],
      cons: []
    }
  }

  handleUpvote() {
    console.log('upvoted!');
  }

  handleDownvote() {
    console.log('downvoted');
  }

  render() {
    return (
      <div id="noteModal" className="modal">
        <div className="modal-content">
          <h4>Pros & Cons</h4>
          <div className="row">
            <form className="col s12">
              <div className="row NoteInput">
                <div className="input-field col s12">
                  <input id="input_text" type="text" data-length="10" />
                  <label htmlFor="input_text">Input</label>
                </div>
              </div>
              <div className="row center-align">
                <i className="material-icons small Upvote" onClick={this.handleUpvote}>thumb_up</i>
                <i className="material-icons small Downvote" onClick={this.handleDownvote}>thumb_down</i>
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

export default NoteModal;

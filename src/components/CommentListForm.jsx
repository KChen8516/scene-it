import React, { Component } from 'react';

class CommentListForm extends Component {

    createComment(e) {

        if(this.inputElement.value !== '') {
            this.props.handleCommentChange({
                text: this.inputElement.value,
                key: Date.now()
            });

            this.inputElement.value = '';
        }

        e.preventDefault();
    }

    deleteComment(e) {
        // Delete the comment
    }

    render() {
        let commentList = null;

        if(this.props.comments) {
            commentList = this.props.comments.map(k => {
                return <li key={k.key}>{k.text}</li>
            });    
        }

        return (
            <div className="CommentList">
                <h3>{this.props.title}</h3>
                <ul>
                    {commentList}        
                </ul>
                <div className="mdc-text-field mdc-text-field">
                    <form onSubmit={this.createComment.bind(this)}>
                        <input ref={ value => this.inputElement = value }
                                type="text" 
                                className="mdc-text-field__input" 
                                placeholder={this.props.placeholder}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default CommentListForm;

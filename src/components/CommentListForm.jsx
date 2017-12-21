import React, { Component } from 'react';

class CommentListForm extends Component {

    constructor() {
        super();

        this.state = {
            isEditing: false
        };
    }

    renderLineOrEdit(item) {
        const lineStyle = {
            wordWrap: 'break-word',
            whiteSpace: 'normal',
            fontSize: 12,
            lineHeight: 1.25,
            height: 35
        }

        const iconStyle = {
            marginRight: 5,
            fontSize: 20,
            height: 20,
            width: 20
        }

        if(this.state.isEditing === item.key) {
            return (
                <div 
                  className="mdc-text-field"
                  key={item.key}>
                    <input 
                        onChange={this.editComment.bind(this)}
                        onBlur={this.loseFocus.bind(this)} 
                        defaultValue={item.text}
                        autoFocus="true"
                        type="text" 
                        className="mdc-text-field__input" 
                    />
                </div>
            )
        } else {
            return <li
                     style={lineStyle}
                     className="mdc-list-item"
                     key={item.key}
                     onClick={this.toggleEdit.bind(this, item.key)}>
                        <i 
                          className="material-icons mdc-list-item__start-detail"
                          style={iconStyle}
                        >{this.props.materialIcon}</i>
                       {item.text}
                    </li>
        }
    }

    toggleEdit(commentID) {
        this.setState({isEditing: commentID});
    }

    loseFocus() {
        console.log('Something lost focus');
        this.setState({isEditing: false})
    }

    editComment(event) {
        console.log(event.target.value);
        console.log(this.state.isEditing);
    }

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
        const commentListStyle = {
            paddingLeft: 0,
            paddingTop: 0,
            fontSize: '.85rem'
        }

        let commentList = [];

        if(this.props.comments) {
            commentList = this.props.comments.map(k => {
                return this.renderLineOrEdit(k)
            });    
        }

        return (
            <div>
                <h3 className="mdc-typography--title" style={{marginBottom:5, marginTop:5}}>{this.props.title}</h3>
                {commentList.length > 0 ? <ul className="mdc-list" style={commentListStyle}>
                    {commentList}        
                </ul> : null}
                <div className="mdc-text-field">                
                    <form onSubmit={this.createComment.bind(this)}>
                        <input 
                          ref={value => this.inputElement = value}
                          type="text" 
                          className="mdc-text-field__input" 
                          placeholder={this.props.placeholder}
                          disabled={this.state.isEditing}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default CommentListForm;

import React, { Component } from 'react';

import '@material/button/dist/mdc.button.min.css';

const saveButton = {
    color: 'white',
    backgroundColor: '#28a745',
    marginRight: 5,
    marginTop: 5
}

const deleteButton = {
    color: 'white',
    backgroundColor: '#dc3545',
    marginTop: 5
}

const commentListStyle = {
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: '.85rem'
}

const lineStyle = {
    wordWrap: 'break-word',
    whiteSpace: 'normal',
    fontSize: 12,
    lineHeight: 1.25,
    minHeight: 35,
    paddingLeft: 0,
    height: 35,
}

const iconStyle = {
    marginRight: 5,
    fontSize: 20,
    height: 20,
    width: 20
}

class CommentListForm extends Component {

    constructor() {
        super();

        this.state = {
            isEditing: false
        };

        this.createComment = this.createComment.bind(this);
        this.editComment = this.editComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }

    renderLineOrEdit(item) {
        if(this.state.isEditing === item.id) {
            return (
                <div 
                  className="mdc-text-field"
                  key={item.id}>
                    <input
                        onChange={this.editComment}
                        onKeyPress={ev=>{if(ev.key === 'Enter'){this.setState({isEditing:false})}}}
                        defaultValue={item.text}
                        autoFocus="true"
                        type="text"
                        className="mdc-text-field__input"
                        style={{paddingTop:0}}                        
                    />
                    <button 
                      className="mdc-button mdc-button--dense" 
                      style={saveButton}
                      onClick={() => {this.setState({isEditing:false})}}
                    >
                        Save
                    </button>
                    <button 
                      className="mdc-button mdc-button--dense" 
                      style={deleteButton}
                      onClick={() => {this.deleteComment(item.id)}}
                    >
                        Delete
                    </button>
                </div>
            )
        } else {
            return <li
                     style={lineStyle}
                     className="mdc-list-item"
                     key={item.id}
                     onClick={() => {this.setState({isEditing:item.id})}}>
                        <i 
                          className="material-icons mdc-list-item__start-detail"
                          style={iconStyle}
                        >{this.props.materialIcon}</i>
                       {item.text}
                    </li>
        }
    }

    editComment(ev) {
        this.props.handleEditComment({
            id: this.state.isEditing,
            text: ev.target.value
        });
    }

    createComment(ev) {
        if(this.inputElement.value !== '') {
            this.props.handleAddComment({
                id: Date.now(),
                text: this.inputElement.value
            });
            this.inputElement.value = '';
        }
    }

    deleteComment(id) {
        this.props.handleDeleteComment(id);
        this.setState({isEditing:false});
    }

    render() {
        let commentList = [];

        if(this.props.comments) {
            commentList = this.props.comments.map(k => {
                return this.renderLineOrEdit(k)
            });
        }

        return (
            <div>
                <h3 className="mdc-typography--title" style={{marginBottom:5, marginTop:5}}>{this.props.title}</h3>
                {commentList.length > 0 ? 
                    <ul className="mdc-list" style={commentListStyle}>
                        {commentList}
                    </ul> 
                : null}
                <div className="mdc-text-field" style={{width:'100%'}}>
                    <input
                        ref={value => this.inputElement = value}
                        type="text"
                        className="mdc-text-field__input"
                        placeholder={this.props.placeholder}
                        disabled={this.state.isEditing}
                        onKeyPress={ev => {if(ev.key ==='Enter'){this.createComment(ev)}}}
                        style={{paddingTop:5}}                        
                    />
                </div>
            </div>
        );
    }
}

export default CommentListForm;

import React, { Component } from 'react';

import '@material/button/dist/mdc.button.min.css';
import './CommentList.css';

const commentListStyle = {
    paddingLeft: 0,
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: '.85rem'
}

const lineItem = {
    wordWrap: 'break-word',
    whiteSpace: 'normal',
    fontSize: 12,
    lineHeight: 1.25,
    minHeight: 35,
    paddingLeft: 0,
    height: 35,
}

class CommentListForm extends Component {

    constructor() {
        super();

        this.state = {
            isEditing: false,
            showAdd: false,
            isEmpty: true
        };

        this.createComment = this.createComment.bind(this);
        this.editComment = this.editComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
        this.toggleShowAdd = this.toggleShowAdd.bind(this);
        this.onBlurAdd = this.onBlurAdd.bind(this);
        this.clearComment = this.clearComment.bind(this);
    }

    renderLineOrEdit(item) {
        if(this.state.isEditing === item.id) {
            return (
                <div className="mdc-text-field" key={item.id}>
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
                      id="SaveButton"
                      onClick={() => {this.setState({isEditing:false})}}
                    >
                        Save
                    </button>
                    <button 
                      className="mdc-button mdc-button--dense" 
                      id="DeleteButton"
                      onClick={() => {this.deleteComment(item.id)}}
                    >
                        Delete
                    </button>
                </div>
            );
        } else {
            return <li
                     className="mdc-list-item"
                     style={lineItem}
                     key={item.id}
                     onClick={() => {this.setState({isEditing:item.id})}}>
                        <i className="ListIcon material-icons mdc-list-item__start-detail">
                            {this.props.materialIcon}
                        </i>
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
            this.inputElement.focus();
            this.setState({isEmpty: true});
        }
    }

    deleteComment(id) {
        this.props.handleDeleteComment(id);
        this.setState({isEditing:false});
    }

    toggleShowAdd() {
        if(!this.state.isEmpty) {
            return;
        } else {
            this.state.showAdd ? this.setState({showAdd: false}) : this.setState({showAdd: true})
        }
    }

    onBlurAdd() {
        if(this.inputElement.value !== '') {
            this.setState({isEmpty: false})
            return;
        } else {
            this.state.showAdd ? this.setState({showAdd: false}) : this.setState({showAdd: true})
        }
    }

    clearComment() {
        this.inputElement.value = '';
        this.inputElement.blur();
        this.setState({isEmpty: true});
        this.setState({showAdd: false});
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
                {commentList.length > 0 && 
                    <ul className="mdc-list" style={commentListStyle}>{commentList}</ul> 
                }
                <div className="mdc-text-field" style={{width:'100%'}}>
                    <input
                        ref={value => this.inputElement = value}
                        type="text"
                        className="mdc-text-field__input"
                        placeholder={this.props.placeholder}
                        disabled={this.state.isEditing}
                        onKeyPress={ev => {if(ev.key ==='Enter') this.createComment(ev)}}
                        style={{paddingTop:5}}
                        onFocus={this.toggleShowAdd}
                        onBlur={this.onBlurAdd}
                    />
                </div>
                {this.state.showAdd &&
                    <div style={{display:'flex',alignItems:'center'}}>
                        <button 
                            className="mdc-button mdc-button--dense"
                            onClick={this.createComment}
                            id="AddButton"
                        >
                            Add
                        </button>
                        <i 
                            className="material-icons ClearIcon"
                            onClick={this.clearComment}
                        >
                            clear
                        </i>
                    </div>
                }
            </div>
        );
    }
}

export default CommentListForm;

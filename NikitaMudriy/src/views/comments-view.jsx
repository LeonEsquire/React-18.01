import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import View from 'views/view';

import Message from 'components/message';
import Form from 'components/form';

import commentsActions from 'actions/comments-actions';
import messagesActions from 'actions/messages-actions';

class CommentsView extends View {

    get id(){
        return this.props.match && this.props.match.params && 'comment' in this.props.match.params ? parseInt(this.props.match.params.comment) : null;
    }

    get isFull(){
        return 'id' in this.props.data && 'text' in this.props.data && 'date' in this.props.data && 'post' in this.props.data && 'author' in this.props.data;
    }

    componentDidMount(){
        if(!this.props.data || !this.id || (this.id && !this.isFull))
            this.onGet(this.id ? { id: this.id } : null);
    }

    get entity(){
        return <div className="card">
            <div className="card-body">
                <p className="card-text">{this.props.data.text}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Date: {new Date(this.props.data.date).toLocaleString()}</li>
            </ul>
            <div className="card-body">
                <a className="card-link btn btn-danger" href="#" role="button" onClick={this.onDelete}>Remove</a>
            </div>
        </div>;
    }

    get list(){
        return <ul className="list-group my-4">
            {this.props.data.map((item, i) => {
                return <Link key={item.id} className="list-group-item d-flex justify-content-between align-items-center" to={`/comments/${item.id}`}>{item.text}</Link>;
            })}
        </ul>;
    }

    get empty(){
        return <Message style={Message.STYLE_INFO}>There is no comments yet.</Message>;
    }

    get form(){
        let inputs = [],
            buttons = [],
            onSubmit = null,
            reset;

        switch(true){
            case this.id && this.props.data && true:
                inputs = [{
                    id: 'id',
                    type: Form.INPUT_TYPE_HIDDEN,
                    value: this.props.data.id
                }, {
                    id: 'text',
                    type: Form.INPUT_TYPE_TEXTAREA,
                    label: 'Text',
                    placeholder: 'Text',
                    value: this.props.data.title
                }];

                buttons = [{
                    type: Form.BUTTON_TYPE_SUBMIT,
                    style: Form.BUTTON_STYLE_PRIMARY,
                    content: 'Edit'
                }];

                onSubmit = this.onEdit;
                reset = false;
                break;
            case !this.id:
                inputs = [{
                    id: 'text',
                    type: Form.INPUT_TYPE_TEXT,
                    label: 'Text',
                    placeholder: 'Text'
                }];

                buttons = [{
                    type: Form.BUTTON_TYPE_SUBMIT,
                    style: Form.BUTTON_STYLE_PRIMARY,
                    content: 'Add'
                }];

                onSubmit = this.onAdd;
                reset = true;
                break;
            default:
                return;
        }

        return <Form inputs={inputs} buttons={buttons} onSubmit={onSubmit} reset={reset} />;
    }

    commentsActions = (method, ...data) => {
        return super.action(commentsActions, method, ...data);
    };

    messagesActions = (method, ...data) => {
        return super.action(messagesActions, method, ...data);
    };

    onGet = (data = null) => {
        this.commentsActions('get', data).catch(error => {
            this.messagesActions('add', {
                style: Message.STYLE_DANGER,
                content: error.message
            });
        });
    };

    onAdd = (data) => {
        this.commentsActions('add', data).catch(error => {
            this.messagesActions('add', {
                style: Message.STYLE_DANGER,
                content: error.message
            });
        });
    };

    onEdit = (data) => {
        this.commentsActions('edit', data).catch(error => {
            this.messagesActions('add', {
                style: Message.STYLE_DANGER,
                content: error.message
            });
        });
    };

    onDelete = (event) => {
        event.preventDefault();

        this.commentsActions('delete', { id: this.props.data.id }).then(result => {
            this.props.history.push('/comments');
        }).catch(error => {
            this.messagesActions('add', {
                style: Message.STYLE_DANGER,
                content: error.message
            });
        });
    };

}

export default connect((state, props) => {
    let data;

    if(props.match && props.match.params && 'comment' in props.match.params){
        let id = parseInt(props.match.params.comment),
            found = state.comments.findIndex(item => item.id === id);

        data = found > -1 ? state.comments[found] : null;
    }else{
        data = state.comments.length ? state.comments : null;
    }

    return {data, messages: state.messages};
})(CommentsView);
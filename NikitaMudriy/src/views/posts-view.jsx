import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import View from 'views/view';

import Message from 'components/message';
import Form from 'components/form';

import postsActions from 'actions/posts-actions';
import messagesActions from 'actions/messages-actions';

class PostsView extends View {

    get id(){
        return this.props.match && this.props.match.params && 'post' in this.props.match.params ? parseInt(this.props.match.params.post) : null;
    }

    get isFull(){
        return 'id' in this.props.data && 'title' in this.props.data && 'text' in this.props.data && 'date' in this.props.data && 'author' in this.props.data;
    }

    componentDidMount(){
        if(!this.props.data || !this.id || (this.id && !this.isFull))
            this.onGet(this.id ? { id: this.id } : null);
    }

    get entity(){
        return <div className="card">
            <div className="card-body">
                <h5 className="card-title">{this.props.data.title}</h5>
                <p className="card-text">{this.props.data.text}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Date: {new Date(this.props.data.date).toLocaleString()}</li>
            </ul>
            <div className="card-body">
                <Link className="card-link btn btn-secondary" to={`/posts/${this.props.data.id}/comments`}>Comments</Link>
                <a className="card-link btn btn-danger" href="#" role="button" onClick={this.onDelete}>Remove</a>
            </div>
        </div>;
    }

    get list(){
        return <ul className="list-group my-4">
            {this.props.data.map((item, i) => {
                return <Link key={item.id} className="list-group-item d-flex justify-content-between align-items-center" to={`/posts/${item.id}`}>{item.title}</Link>;
            })}
        </ul>;
    }

    get empty(){
        return <Message style={Message.STYLE_INFO}>There is no posts yet.</Message>;
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
                    id: 'title',
                    type: Form.INPUT_TYPE_TEXT,
                    label: 'Title',
                    placeholder: 'Title',
                    value: this.props.data.title
                }, {
                    id: 'text',
                    type: Form.INPUT_TYPE_TEXTAREA,
                    label: 'Text',
                    placeholder: 'Text',
                    value: this.props.data.text
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
                    id: 'title',
                    type: Form.INPUT_TYPE_TEXT,
                    label: 'Title',
                    placeholder: 'Title'
                }, {
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

    postsActions = (method, ...data) => {
        return super.action(postsActions, method, ...data);
    };

    messagesActions = (method, ...data) => {
        return super.action(messagesActions, method, ...data);
    };

    onGet = (data = null) => {
        this.postsActions('get', data).catch(error => {
            this.messagesActions('add', {
                style: Message.STYLE_DANGER,
                content: error.message
            });
        });
    };

    onAdd = (data) => {
        this.postsActions('add', data).catch(error => {
            this.messagesActions('add', {
                style: Message.STYLE_DANGER,
                content: error.message
            });
        });
    };

    onEdit = (data) => {
        this.postsActions('edit', data).catch(error => {
            this.messagesActions('add', {
                style: Message.STYLE_DANGER,
                content: error.message
            });
        });
    };

    onDelete = (event) => {
        event.preventDefault();

        this.postsActions('delete', { id: this.props.data.id }).then(result => {
            this.props.history.push('/posts');
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

    if(props.match && props.match.params && 'post' in props.match.params){
        let id = parseInt(props.match.params.post),
            found = state.posts.findIndex(item => item.id === id);

        data = found > -1 ? state.posts[found] : null;
    }else{
        data = state.posts.length ? state.posts : null;
    }

    return {data, messages: state.messages};
})(PostsView);
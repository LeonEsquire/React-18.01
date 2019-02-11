import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import View from 'views/view';

import Message from 'components/message';
import Form from 'components/form';

import usersActions from 'actions/users-actions';
import messagesActions from 'actions/messages-actions';

class UsersView extends View {

    get id(){
        return this.props.match && this.props.match.params && 'user' in this.props.match.params ? parseInt(this.props.match.params.user) : null;
    }

    get isFull(){
        return 'id' in this.props.data && 'name' in this.props.data && 'date' in this.props.data;
    }

    componentDidMount(){
        if(!this.props.data || !this.id || (this.id && !this.isFull))
            this.onGet(this.id ? { id: this.id } : null);
    }

    get entity(){
        return <div className="card">
            <div className="card-body">
                <h5 className="card-title">{this.props.data.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Date: {new Date(this.props.data.date).toLocaleString()}</li>
            </ul>
            <div className="card-body">
                <Link className="card-link btn btn-secondary" to={`/users/${this.props.data.id}/posts`}>Posts</Link>
                <Link className="card-link btn btn-secondary" to={`/users/${this.props.data.id}/comments`}>Comments</Link>
                <a className="card-link btn btn-danger" href="#" role="button" onClick={this.onDelete}>Remove</a>
            </div>
        </div>;
    }

    get list(){
        return <ul className="list-group my-4">
            {this.props.data.map((item, i) => {
                return <Link key={item.id} className="list-group-item d-flex justify-content-between align-items-center" to={`/users/${item.id}`}>{item.name}</Link>;
            })}
        </ul>;
    }

    get empty(){
        return <Message style={Message.STYLE_INFO}>There is no users yet.</Message>;
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
                    id: 'name',
                    type: Form.INPUT_TYPE_TEXT,
                    label: 'Name',
                    placeholder: 'Name',
                    value: this.props.data.name
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
                    id: 'name',
                    type: Form.INPUT_TYPE_TEXT,
                    label: 'Name',
                    placeholder: 'Name'
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

    usersActions = (method, ...data) => {
        return super.action(usersActions, method, ...data);
    };

    messagesActions = (method, ...data) => {
        return super.action(messagesActions, method, ...data);
    };

    onGet = (data = null) => {
        this.usersActions('get', data).catch(error => {
            this.messagesActions('add', {
                style: Message.STYLE_DANGER,
                content: error.message
            });
        });
    };

    onAdd = (data) => {
        this.usersActions('add', data).catch(error => {
            this.messagesActions('add', {
                style: Message.STYLE_DANGER,
                content: error.message
            });
        });
    };

    onEdit = (data) => {
        this.usersActions('edit', data).catch(error => {
            this.messagesActions('add', {
                style: Message.STYLE_DANGER,
                content: error.message
            });
        });
    };

    onDelete = (event) => {
        event.preventDefault();

        this.usersActions('delete', { id: this.props.data.id }).then(result => {
            this.props.history.push('/users');
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

    if(props.match && props.match.params && 'user' in props.match.params){
        let id = parseInt(props.match.params.user),
            found = state.users.findIndex(item => item.id === id);

        data = found > -1 ? state.users[found] : null;
    }else{
        data = state.users.length ? state.users : null;
    }

    return {data, messages: state.messages};
})(UsersView);
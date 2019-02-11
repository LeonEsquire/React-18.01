import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ClassNames from "classnames";

import View from 'views/view';

import Message from 'components/message';
import Form from 'components/form';

import dbsActions from 'actions/dbs-actions';
import messagesActions from 'actions/messages-actions';

class DBsView extends View {

    get id(){
        return this.props.match && this.props.match.params && 'db' in this.props.match.params ? this.props.match.params.db : null;
    }

    get isFull(){
        return 'id' in this.props.data && 'size' in this.props.data && 'date' in this.props.data && 'current' in this.props.data;
    }

    componentDidMount(){
        if(!this.props.data || !this.id || (this.id && !this.isFull))
            this.onGet(this.id ? { id: this.id } : null);
    }

    getSize(bytes){
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

        if(bytes === 0)
            return 0;

        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);

        return `${bytes / (1024 ** i)} ${sizes[i]}`;
    }

    get entity(){
        return <div className="card">
            <div className="card-body">
                <h5 className="card-title">{this.props.data.id}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Size: {this.getSize(this.props.data.size)}</li>
                <li className="list-group-item">Date: {new Date(this.props.data.date).toLocaleString()}</li>
                {this.props.data.current ? <li className="list-group-item">Current</li> : ''}
            </ul>
            <div className="card-body">
                <a className="card-link btn btn-outline-primary" href="#" role="button" onClick={this.props.data.current ? this.onClose : this.onOpen}>{this.props.data.current ? 'Close' : 'Open'}</a>
                <a className="card-link btn btn-outline-primary" href="#" role="button" onClick={this.onInit}>Init</a>
                <a className="card-link btn btn-outline-primary" href="#" role="button" onClick={this.onDrop}>Drop</a>
                <a className="card-link btn btn-outline-primary" href="#" role="button" onClick={this.onFill}>Fill</a>
                <a className="card-link btn btn-outline-primary" href="#" role="button" onClick={this.onClear}>Clear</a>
                <a className="card-link btn btn-danger" href="#" role="button" onClick={this.onDelete}>Remove</a>
            </div>
        </div>;
    }

    get list(){
        return <ul className="list-group my-4">
            {this.props.data.map((item, i) => {
                return <Link key={item.id} className={ClassNames('list-group-item d-flex justify-content-between align-items-center', {
                    'active': item.current
                })} to={`/dbs/${item.id}`}>{item.id}</Link>;
            })}
        </ul>;
    }

    get empty(){
        return <Message style={Message.STYLE_INFO}>There is no databases yet.</Message>;
    }

    get form(){
        let inputs = [],
            buttons = [],
            onSubmit = null,
            reset;

        switch(true){
            case this.id && this.props.data && true:
                inputs = [{
                    id: 'oldId',
                    type: Form.INPUT_TYPE_HIDDEN,
                    value: this.props.data.id
                }, {
                    id: 'newId',
                    type: Form.INPUT_TYPE_TEXT,
                    label: 'ID',
                    placeholder: 'ID',
                    value: this.props.data.id
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
                    id: 'id',
                    type: Form.INPUT_TYPE_TEXT,
                    label: 'ID',
                    placeholder: 'ID'
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

    dbsActions = (method, ...data) => {
        return super.action(dbsActions, method, ...data);
    };

    messagesActions = (method, ...data) => {
        return super.action(messagesActions, method, ...data);
    };

    onGet = (data = null) => {
        this.dbsActions('get', data).catch(error => {
            this.messagesActions('add', {
                style: Message.STYLE_DANGER,
                content: error.message
            });
        });
    };

    onAdd = (data) => {
        this.dbsActions('add', data).catch(error => {
            this.messagesActions('add', {
                style: Message.STYLE_DANGER,
                content: error.message
            });
        });
    };

    onEdit = (data) => {
        this.dbsActions('edit', data).then(result => {
            this.props.history.push(result.value.id);
        }).catch(error => {
            this.messagesActions('add', {
                style: Message.STYLE_DANGER,
                content: error.message
            });
        });
    };

    onDelete = (event) => {
        event.preventDefault();

        this.dbsActions('delete', { id: this.props.data.id }).then(result => {
            this.props.history.push('/');
        }).catch(error => {
            this.messagesActions('add', {
                style: Message.STYLE_DANGER,
                content: error.message
            });
        });
    };

    onOpen = (event) => {
        event.preventDefault();

        this.dbsActions('open', { id: this.props.data.id }).catch(error => {
            this.messagesActions('add', {
                style: Message.STYLE_DANGER,
                content: error.message
            });
        });
    };

    onClose = (event) => {
        event.preventDefault();

        this.dbsActions('close', { id: this.props.data.id }).catch(error => {
            this.messagesActions('add', {
                style: Message.STYLE_DANGER,
                content: error.message
            });
        });
    };

    onInit = (event) => {
        event.preventDefault();

        this.dbsActions('init', { id: this.props.data.id }).catch(error => {
            this.messagesActions('add', {
                style: Message.STYLE_DANGER,
                content: error.message
            });
        });
    };

    onDrop = (event) => {
        event.preventDefault();

        this.dbsActions('drop', { id: this.props.data.id }).catch(error => {
            this.messagesActions('add', {
                style: Message.STYLE_DANGER,
                content: error.message
            });
        });
    };

    onFill = (event) => {
        event.preventDefault();

        this.dbsActions('fill', { id: this.props.data.id }).catch(error => {
            this.messagesActions('add', {
                style: Message.STYLE_DANGER,
                content: error.message
            });
        });
    };

    onClear = (event) => {
        event.preventDefault();

        this.dbsActions('clear', { id: this.props.data.id }).catch(error => {
            this.messagesActions('add', {
                style: Message.STYLE_DANGER,
                content: error.message
            });
        });
    };

}

export default connect((state, props) => {
    let data;

    if(props.match && props.match.params && 'db' in props.match.params){
        let found = state.dbs.findIndex(item => item.id === props.match.params.db);

        data = found > -1 ? state.dbs[found] : null;
    }else{
        data = state.dbs.length ? state.dbs : null;
    }

    return {data, messages: state.messages};
})(DBsView);
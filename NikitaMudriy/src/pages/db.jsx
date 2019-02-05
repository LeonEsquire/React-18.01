import React from 'react';
import {Link} from "react-router";
import ClassNames from 'classnames';

import Page from 'components/page';
import Message from 'components/message';
import Form from 'components/form';

export default class DB extends Page {

    constructor(...args){
        super('/api', 'dbs', ...args);
    }

    componentDidMount(){
        this.onGet(this.props.params && 'db' in this.props.params ? {
            id: this.props.params.db
        } : null);
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
                <h5 className="card-title">{this.state.data.id}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Size: {this.getSize(this.state.data.size)}</li>
                <li className="list-group-item">Date: {new Date(this.state.data.date).toLocaleString()}</li>
                {this.state.data.current ? <li className="list-group-item">Current</li> : ''}
            </ul>
            <div className="card-body">
                <a className="card-link btn btn-outline-primary" href="#" role="button" onClick={this.state.data.current ? this.onClose : this.onOpen}>{this.state.data.current ? 'Close' : 'Open'}</a>
                <a className="card-link btn btn-outline-primary" href="#" role="button" onClick={this.onInit}>Init</a>
                <a className="card-link btn btn-outline-primary" href="#" role="button" onClick={this.onDrop}>Drop</a>
                <a className="card-link btn btn-outline-primary" href="#" role="button" onClick={this.onFill}>Fill</a>
                {/*<a className="card-link btn btn-outline-primary" href="#" role="button" onClick={this.onClear}>Clear</a>*/}
                <a className="card-link btn btn-danger" href="#" role="button" onClick={this.onRemove}>Remove</a>
            </div>
        </div>;
    }

    get list(){
        return <ul className="list-group my-4">
            {this.state.data.map((item, i) => {
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
            onSubmit = null;

        switch(true){
            case this.props.params && 'db' in this.props.params && this.state.data && true:
                inputs = [{
                    id: 'oldId',
                    type: Form.INPUT_TYPE_HIDDEN,
                    value: this.state.data.id
                }, {
                    id: 'newId',
                    type: Form.INPUT_TYPE_TEXT,
                    label: 'ID',
                    placeholder: 'ID',
                    value: this.state.data.id
                }];

                buttons = [{
                    type: Form.BUTTON_TYPE_SUBMIT,
                    style: Form.BUTTON_STYLE_PRIMARY,
                    content: 'Edit'
                }];

                onSubmit = this.onEdit;
                break;
            case !this.props.params || !('db' in this.props.params):
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
                break;
            default:
                return;
        }

        return <Form inputs={inputs} buttons={buttons} onSubmit={onSubmit} reset={false} />;
    }

    onGet = (data = null) => {
        super.get(data).then(result => this.setState({
            data: result
        })).catch(error => this.setState({
                messages: [...this.state.messages, {
                    style: Message.STYLE_DANGER,
                    content: error.message
                }]
            }));
    };

    onAdd = (data) => {
        super.add(data).then(result => this.onGet()).catch(error => this.setState({
            messages: [...this.state.messages, {
                style: Message.STYLE_DANGER,
                content: error.message
            }]
        }));
    };

    onEdit = (data) => {
        super.edit({...data, oldId: this.state.data.id}).then(result => this.onGet({
            id: data.newId
        })).catch(error => this.setState({
            messages: [...this.state.messages, {
                style: Message.STYLE_DANGER,
                content: error.message
            }]
        }));
    };

    onRemove = (event) => {
        event.preventDefault();

        super.remove({id: this.state.data.id}).then(result => this.props.router.push(this.props.routes[this.props.routes.length - 2].path)).catch(error => this.setState({
            messages: [...this.state.messages, {
                style: Message.STYLE_DANGER,
                content: error.message
            }]
        }));
    };

    onOpen = (event) => {
        event.preventDefault();

        super.method('open', { id: this.state.data.id }).then(result => this.setState({
            data: {...this.state.data, current: true}
        })).catch(error => this.setState({
            messages: [...this.state.messages, {
                style: Message.STYLE_DANGER,
                content: error.message
            }]
        }));
    };

    onClose = (event) => {
        event.preventDefault();

        super.method('close', { id: this.state.data.id }).then(result => this.setState({
            data: {...this.state.data, current: false}
        })).catch(error => this.setState({
            messages: [...this.state.messages, {
                style: Message.STYLE_DANGER,
                content: error.message
            }]
        }));
    };

    onInit = (event) => {
        event.preventDefault();

        super.method('init', { id: this.state.data.id }).then(result => this.onGet({
            id: this.state.data.id
        })).catch(error => this.setState({
            messages: [...this.state.messages, {
                style: Message.STYLE_DANGER,
                content: error.message
            }]
        }));
    };

    onDrop = (event) => {
        event.preventDefault();

        super.method('drop', { id: this.state.data.id }).then(result => this.onGet({
            id: this.state.data.id
        })).catch(error => this.setState({
            messages: [...this.state.messages, {
                style: Message.STYLE_DANGER,
                content: error.message
            }]
        }));
    };

    onFill = (event) => {
        event.preventDefault();

        super.method('fill', { id: this.state.data.id }).then(result => this.onGet({
            id: this.state.data.id
        })).catch(error => this.setState({
            messages: [...this.state.messages, {
                style: Message.STYLE_DANGER,
                content: error.message
            }]
        }));
    };

    onClear = (event) => {
        event.preventDefault();

        super.method('clear', { id: this.state.data.id }).then(result => this.onGet({
            id: this.state.data.id
        })).catch(error => this.setState({
            messages: [...this.state.messages, {
                style: Message.STYLE_DANGER,
                content: error.message
            }]
        }));
    };

}
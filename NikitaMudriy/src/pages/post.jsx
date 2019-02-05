import React from 'react';
import {Link} from "react-router";

import Page from 'components/page';
import Badge from 'components/badge';
import Message from 'components/message';
import Form from 'components/form';

export default class Post extends Page {

    constructor(...args){
        super('/api', 'posts', ...args);
    }

    componentDidMount(){
        this.onGet(this.props.params && 'post' in this.props.params ? {
            id: this.props.params.post
        } : null);
    }

    get entity(){
        return <div className="card">
            <div className="card-body">
                <h5 className="card-title">{this.state.data.title}</h5>
                <p className="card-text">{this.state.data.text}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Date: {new Date(this.state.data.date).toLocaleString()}</li>
            </ul>
            <div className="card-body">
                <Link className="card-link btn btn-secondary" to={`/posts/${this.props.params.user}/comments`}>Comments</Link>
                <a className="card-link btn btn-danger" href="#" role="button" onClick={this.onRemove}>Remove</a>
            </div>
        </div>;
    }

    get list(){
        return <ul className="list-group my-4">
            {this.state.data.map((item, i) => {
                return <Link key={item.id} className="list-group-item d-flex justify-content-between align-items-center" to={`/posts/${item.id}`}>{item.title}</Link>;
            })}
        </ul>;
    }

    get empty(){
        return <Message style={Message.STYLE_INFO}>There is no posts yet.</Message>;
    }

    get form(){
        return <></>;

        let inputs = [],
            buttons = [],
            onSubmit = null;

        switch(true){
            case this.props.params && 'post' in this.props.params && this.state.data && true:
                inputs = [{
                    id: 'id',
                    type: Form.INPUT_TYPE_HIDDEN,
                    value: this.props.params.post
                }, {
                    id: 'title',
                    type: Form.INPUT_TYPE_TEXT,
                    label: 'Title',
                    placeholder: 'Title',
                    value: this.state.data.title
                }, {
                    id: 'text',
                    type: Form.INPUT_TYPE_TEXTAREA,
                    label: 'Text',
                    placeholder: 'Text',
                    value: this.state.data.text
                }];

                buttons = [{
                    type: Form.BUTTON_TYPE_SUBMIT,
                    style: Form.BUTTON_STYLE_PRIMARY,
                    content: 'Edit'
                }];

                onSubmit = this.onEdit;
                break;
            case !this.props.params || !('post' in this.props.params):
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
        super.edit({...data, id: this.state.data.id}).then(result => this.onGet({
            id: this.state.data.id
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

}
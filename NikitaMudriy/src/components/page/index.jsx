import React, {Component} from 'react';

import Service from 'components/service';

import Message from 'components/message';

export default class Page extends Component {

    static defaultProps = {
        data: null,
        messages: []
    };

    state = {
        data: null,
        messages: [],
        path: '/'
    };

    constructor(url, resource, ...args){
        super(...args);

        if(this.props.data)
            this.state.data = this.props.data;

        if(this.props.messages.length)
            this.state.messages = [...this.state.messages, ...this.props.messages];

        this.service = new Service(url, resource);
    }

    get(data = null){
        return this.service.request(Service.METHOD_GET, data);
    }

    add(data){
        return this.service.request(Service.METHOD_POST, data);
    }

    edit(data){
        return this.service.request(Service.METHOD_PUT, data);
    }

    remove(data){
        return this.service.request(Service.METHOD_DELETE, data);
    }

    method(method, data = {}){
        return this.service.request(Service.METHOD_GET, {...data, method});
    }

    get messages(){
        return <>
            {this.state.messages.map((message, i) => {
                let {content, ...messageProps} = message;

                return <Message key={i} {...messageProps}>{content}</Message>;
            })}
        </>;
    }

    get entity(){
        return <></>;
    }

    get list(){
        return <></>;
    }

    get empty(){
        return <></>;
    }

    get form(){
        return <></>;
    }

    get content(){
        return <>
            {Array.isArray(this.state.data) ? this.state.data.length ? this.list : this.empty : this.entity}
        </>;
    }

    get view(){
        return <>
            {this.messages}
            {this.state.data ? this.content : ''}
            {this.form}
        </>;
    }

    render(){
        return <>
            {this.view}
            <hr className="my-4" />
            {this.props.children}
        </>;
    }

}
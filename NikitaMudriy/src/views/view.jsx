import React, {Component} from 'react';

import Message from 'components/message';

export default class View extends Component {

    static defaultProps = {
        data: null,
        messages: []
    };

    constructor(...args){
        super(...args);
    }

    get messages(){
        return <>
            {this.props.messages.map((message, i) => {
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
            {Array.isArray(this.props.data) ? this.props.data.length ? this.list : this.empty : this.entity}
        </>;
    }

    get view(){
        return <>
            {this.messages}
            {this.props.data ? this.content : ''}
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

    action(actions, method, ...data){
        return this.props.dispatch(actions[method](...data));
    };

}
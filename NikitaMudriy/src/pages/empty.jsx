import React, {Component} from 'react';

export default class Empty extends Component {
    render(){
        return <>{this.props.children}</>;
    }
}
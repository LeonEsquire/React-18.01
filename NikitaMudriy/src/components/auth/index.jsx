import React, {Component} from 'react';

import Login from 'login';
import User from 'user';

export default class Auth extends Component {

    state = {
        auth: false
    };

    static defaultProps = {
        user: false
    };

    constructor(props, context, updater){
        super(props, context, updater);

        this.state.auth = this.props.user;
    }

    onAuth = user => {
        this.setState({
            auth: user
        });
    };

    render() {
        return this.state.auth ? <User {...this.state.auth} /> : <Login onAuth={this.onAuth.bind(this)} />;
    }

}
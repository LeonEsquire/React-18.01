import React, {Component} from 'react';

export default class User extends Component {

    static defaultProps = {
        email: '',
        name: ''
    };

    render() {
        return <div className="media mt-5">
            <div className="media-body">
                <h5 className="mt-0">{this.props.name}</h5>
                {this.props.email}
            </div>
        </div>;
    }

}
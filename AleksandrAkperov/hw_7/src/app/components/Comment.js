import React from 'react';
import {Link} from 'react-router';

export default class  Comment extends React.Component {
    render() {
        return (
            <div>
                <div className="card border-secondary mb-3">
                    <div className="card-header">
                        {this.props.name}   
                    </div>
                    <div className="card-body text-secondary">
                        <p> {this.props.body} </p>
                        <p> {this.props.email} </p>
                    </div>
                </div>
            </div>
        )
    }
}
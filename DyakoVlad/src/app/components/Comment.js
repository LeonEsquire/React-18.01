import React from 'react';
import {Link} from 'react-router';

export default class Comment extends React.Component {
    render() {
        const {id, name, body, email} = this.props;

        return (

            <div className="card border-secondary mb-3">
                <div className="card-header">
                    <Link to={`/comments/${id}`}>
                        {name}
                    </Link>
                </div>
                <div className="card-body text-secondary">
                    <p>{body}</p>
                    <p><b>{email}</b></p>
                </div>
            </div>
        );
    }
}
import React from 'react';
import {Link} from 'react-router';

export default class Post extends React.Component {
    render() {
        const {id, title, body} = this.props;

        return (

            <div className="card border-secondary mb-3">
                <div className="card-header">
                    <Link to={`/posts/${id}`}>
                        {title}
                    </Link>
                </div>
                <div className="card-body text-secondary">
                    <p>{body}</p>
                </div>
            </div>
        );
    }
}
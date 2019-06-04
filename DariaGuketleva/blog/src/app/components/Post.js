import React from 'react';
import {Link} from 'react-router';

export default class Post extends React.Component {


    render() {
        return (

            <div className="card border-secondary mb-3">
                <div className="card-header">
                    <Link to={`/posts/${this.props.post.id}`}>
                        {this.props.post.title}
                    </Link>
                </div>
                <div className="card-body text-secondary">
                    <p>{this.props.post.body}</p>

                    <p>{this.props.post.userId}</p>
                </div>
            </div>
        );
    }
}
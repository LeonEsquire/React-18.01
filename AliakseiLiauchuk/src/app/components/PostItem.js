import React from 'react';
import {Link} from 'react-router-dom';

export default class PostItem extends React.Component {
  render() {
    return (
      <div>
        <div className="card border-secondary mb-3">
          <h3 className="card-header">
            <Link to={`/posts/${this.props.id}`}>
              {this.props.title}
            </Link>
          </h3>
          <div className="card-body text-secondary">
            <div>{this.props.body}</div>
          </div>
        </div>
      </div>
    );
  }
}
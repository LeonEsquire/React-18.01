import React from 'react';
import {Link} from 'react-router';

const Post =props=>{
        return (

            <div className="card border-secondary mb-3">
                <div className="card-header">
                    <Link to={`/posts/${props.post.id}`}>
                        {props.post.title}
                    </Link>
                </div>
                <div className="card-body text-secondary">
                    <p>{props.post.body}</p>

                    <p>{props.post.userId}</p>
                </div>
            </div>
        );
};

export default Post;
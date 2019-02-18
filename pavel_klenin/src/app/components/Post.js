import React from 'react';
import {Link} from 'react-router';

import style from '../style/Post.css'


class Post extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <div className={style.post}>
                {
                    (window.location.pathname != `/posts/${this.props.id}`) ?
                    (<h2 className = {style.postTitle}>
                        <Link to={`/posts/${this.props.id}`}>
                            {this.props.title}
                        </Link>
                    </h2>) :
                    (<h2 className = {style.postTitle}>
                        {this.props.title}
                    </h2>)
                }
                <hr/>
                <p className = {style.postBody}>{this.props.body}</p>
                {
                    (window.location.pathname != `/users/${this.props.userId}`) &&
                    (<p className = {style.postAuthor}>
                        go to&nbsp;
                        <Link to={`/users/${this.props.userId}`}>
                            {
                            (window.location.pathname === `/posts`) ?
                            ('author') :
                            this.props.author
                            }
                        </Link>
                    </p>)
                }
            </div>
        );
    }
}

export default Post;
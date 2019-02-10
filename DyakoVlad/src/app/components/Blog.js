import React from 'react';
import Post from './Post';

export default class Blog extends React.Component {
    render() {
        const posts = this.props.posts.map((post, index) => {
            return <Post key={index} body={post.body} author={post.author}
                         date={post.dateOfPublication}>{post.title}</Post>
        });

        return (
            <div>
                {posts}
            </div>
        )
    }
}
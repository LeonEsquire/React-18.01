import React from 'react'
import axios from 'axios'
import Post from './Post'

class PostList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.posts.length) {
            return null;
        }

        const posts = this.props.posts.map((post, index) => {
            return <Post key={index} {...post} />
        })

        return (
            <>
                <h1>Posts</h1>
                {posts}
            </>
        )
    }
}

export default PostList
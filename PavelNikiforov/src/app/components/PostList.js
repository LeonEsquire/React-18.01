import React from 'react'
import axios from 'axios'
import Post from './Post'

class PostList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }

        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(response => {
                this.setState({ posts: response.data })
            })
    }

    render() {
        if (!this.state.posts.length) {
            return null;
        }

        const posts = this.state.posts.map((post, index) => {
            return <Post key={index} {...post} />
        })

        return (
            <div>
                <h1>Posts</h1>
                {posts}
            </div>
        )
    }
}

export default PostList
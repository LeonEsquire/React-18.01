import React from 'react';
import axios from 'axios';
import Post from './Post';

export default class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            users:[]
        };

        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => {
        //         this.setState({posts: response.data})
        //     });
        // axios.get('https://jsonplaceholder.typicode.com/users/')
        //     .then(response => {
        //         this.setState({users: response.data})
        //     });
    }

    render() {
        if (!this.props.posts.length) {
            return null;
        }

        const posts = this.props.posts.map((post, index) => {
            return <Post key={index} post={post}/>
        });

        return (
            <div>
                <h1>Статьи</h1>
                {posts}
            </div>
        );
    }
}
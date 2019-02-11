import React from 'react';
import PostContent from '../components/Post';
import axios from 'axios';

export default class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null
        };

        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
            .then(response => {
                this.setState({post: response.data})
            });
    }

    render() {
        return (
            <div>
                {this.state.post && <PostContent post={this.state.post}/>}
            </div>
        );
    }
}
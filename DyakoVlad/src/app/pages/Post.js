import React from 'react';
import PostProfile from '../components/Post';
import axios from 'axios';

export default class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null
        };
    }

    render() {
        return (
            <div>
                {this.state.post && <PostProfile {...this.state.post}/>}
            </div>
        );
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
            .then(response => {
                this.setState({post: response.data})
            });
    }
}
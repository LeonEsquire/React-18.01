import React from 'react';
import PostComp from '../components/PostComp';
import axios from 'axios';

export default class Post extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null
        };

        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.id}`)
            .then(response => {
                this.setState({post: response.data})
            });
    }

    render() {
        return (
            <div>
                {this.state.post && <PostComp {...this.state.post}/>}
            </div>
        );
    }
}
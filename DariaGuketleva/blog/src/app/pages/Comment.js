import React from 'react';
import CommentContent from '../components/Comment';
import axios from 'axios';

export default class Comment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: null
        };

        axios.get(`https://jsonplaceholder.typicode.com/comments/${this.props.params.commentId}`)
            .then(response => {
                this.setState({comment: response.data})
            });
    }

    render() {
        return (
            <div>
                {this.state.comment && <CommentContent {...this.state.comment}/>}
            </div>
        );
    }
}
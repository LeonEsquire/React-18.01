import React from 'react';
import axios from 'axios'
import Comment from './Comment'

class CommentList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments/')
            .then(response => {
                this.setState({ comments: response.data })
            })
    }

    render() {
        if (!this.state.comments.length) {
            return null
        }

        const comments = this.state.comments.map((comment, index) => {
            return <Comment key={index} {...comment} />
        })

        return (
            <>
                <h1>Comments</h1>
                {comments}
            </>
        )
    }
}

export default CommentList
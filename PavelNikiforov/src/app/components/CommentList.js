import React from 'react';
import axios from 'axios'
import Comment from './Comment'

class CommentList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.comments.length) {
            return null
        }

        const comments = this.props.comments.map((comment, index) => {
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
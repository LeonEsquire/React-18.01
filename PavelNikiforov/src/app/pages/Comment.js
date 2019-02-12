import React from 'react'
import {connect} from 'react-redux'
import CommentProfile from '../components/Comment'
import {fetchComments} from '../actions/commentAction'

class Comment extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchComments(this.props.params.commentId))
    }

    render() {
        return (
            <>
                <CommentProfile {...this.props.comments}/>
            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        comments: state.comments.comments
    }
}

export default connect(mapStateToProps)(Comment)
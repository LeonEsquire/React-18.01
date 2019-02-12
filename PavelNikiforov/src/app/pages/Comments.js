import React from 'react'
import {connect} from 'react-redux'
import CommentList from '../components/CommentList'
import {fetchComments} from '../actions/commentAction'

class Comments extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchComments())
    }

    render() {
        return (
            <>
                <CommentList comments={this.props.comments}/>
            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        comments: state.comments.comments
    }
}

export default connect(mapStateToProps)(Comments)
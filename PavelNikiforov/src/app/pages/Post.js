import React from 'react'
import {connect} from 'react-redux'
import PostProfile from '../components/Post'
import {fetchPosts} from '../actions/postAction'

class Post extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPosts(this.props.params.postId))
    }

    render() {
        return (
            <>
                {this.props.posts && <PostProfile {...this.props.posts}/>}
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps)(Post)
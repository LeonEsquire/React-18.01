import React from 'react'
import {connect} from 'react-redux'
import PostList from '../components/PostList'
import {fetchPosts} from '../actions/postAction'

class Posts extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPosts())
    }

    render() {
        return (
            <>
                <PostList posts={this.props.posts}/>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps)(Posts)
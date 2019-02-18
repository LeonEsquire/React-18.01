import React from 'react';

import {connect} from 'react-redux';
import {fetchPostCard} from '../actions/postCardActions';

import Comment from '../components/Comment';
import Post from '../components/Post';

import style from '../style/PostCard.css';

class PostCard extends React.Component {

    componentDidMount () {
        const postID = this.props.params.postID;
        this.props.dispatch(fetchPostCard(postID));
    }

    render () {
        let postCard = 'loading...';
        if (this.props.post.id === +this.props.params.postID)
        {
            const comments = this.props.comments.map((comment, index) => {
                return (
                    <Comment key={index} {...comment}/>
                );
            })

            postCard = (
                <div>
                    <Post {...this.props.post} author ={this.props.author}/>
                    <hr/>
                    <h3>Comments</h3>
                    <hr/>
                    {comments}
                </div>
            )
        }

        return postCard;
    }


}

const mapStatetoProps = (state) => ({
    post: state.postCard.post,
    comments: state.postCard.comments,
    author: state.postCard.author,
})

export default connect(mapStatetoProps)(PostCard);
import React from 'react';
import Post from './Post';
import { connect } from 'react-redux';
import {fetchPosts, deletePost} from "../actions/postAction";

 class PostList extends React.Component {
    
    fetchPosts () {
        this.props.dispatch(fetchPosts());
        
    }
    
    delete (postId) {
        this.props.dispatch(deletePost(postId))
    }    


    render() {
       
        const posts = this.props.posts;

        if (!posts.length) {
            return <button className="btn btn-primary" onClick={this.fetchPosts.bind(this)} >Загрузить все посты</button>
        }
        const postItems = posts.map((post, index) => {
            return <Post key={post.id} {...post} deletepost = {this.delete.bind(this, post.id)} />
        });
        console.log(posts)
        return (
            <div>
                <h1>Посты</h1>
                {postItems}
            </div>
        );
    }


       
    
    

}

function mapStateToProps(state) {

    return {
        posts:state.posts.posts,
        postFetch:state.users.fetched,
        users: state.users.users
    }
}



export default connect(mapStateToProps)(PostList);

import React from 'react';
import {addPost, getPosts} from "../actions/postActions";
import PostStore from '../stores/postStore';


export default class Posts extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            posts: []
        }
    }

    onPostChange(){
        this.setState({posts: PostStore.posts})
    }

    componentDidMount() {
        getPosts();
        PostStore.on('change', this.onPostChange);
    }

    newPost() {
        const body = 'Текст поста';
        const userId = 1;
        const title = 'Мой пост';

        addPost(title, userId, body);
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.newPost}>Добавить пост</button>
            </div>


        )
    }
}
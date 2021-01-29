import React from 'react';
import {addPost, getPosts} from "../actions/postActions";
import PostStore from '../stores/postStore';
import PostsList from "../components/PostsList";

export default class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.onPostChange = this.onPostChange.bind(this);
        this.newPost = this.newPost.bind(this);

    }

    onPostChange () {
        this.setState({posts: PostStore.posts});
    }

    componentDidMount() {
        getPosts();
        PostStore.on('change', this.onPostChange);

    }

    newPost (){
        const body = 'Flux не сложен, но дебажить его сложно. Сделан апгрейд store через стрелочные функции';
        const userId = 1;
        const title = 'Пост_1';
        addPost(title, userId, body);
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.newPost}>Добавить пост</button>
                <PostsList posts = {this.state.posts} />
            </div>


        )
    }
}
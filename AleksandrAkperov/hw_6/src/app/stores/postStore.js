import {ADD_POST, GET_POSTS} from "../constants/postConstants";
import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';

class postStore extends EventEmitter {
    constructor ()
    {
        super(...arguments);
        this.posts = [];

        const change =()=>
        {
            this.emit('change');
        };

        const getPosts = (posts) => {
            this.posts = posts;
            change();
            console.log(this.posts);
        };

        const addPost = (post) => {
            this.posts = [post, ...this.posts];
            change();
        };

        this.handleActions = (action) => {
        switch (action.type){
            case ADD_POST:
                addPost(action.data);
                break;
            case GET_POSTS:
                getPosts(action.data);
                break;

        }
    };

    };
}

const store = new postStore();
dispatcher.register(store.handleActions);
export default store;

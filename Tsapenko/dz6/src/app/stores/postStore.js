import {ADD_POST, GET_POSTS} from '../constants/postConstants';
import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';

export class postStore extends EventEmitter {
    constructor()
    {
        super(...arguments);
        this.posts = [];
        this.getPosts = this.getPosts.bind(this);
        this.change = this.change.bind(this);
        this.addPost = this.addPost.bind(this);
        this.hendleActions = this.hendleActions.bind(this);
    }

    getPosts(posts){
        this.posts = posts;
        this.change();
    }

    change()
    {
        this.emit('change')
    }

    addPost(post)
    {
        this.posts = [post, ...this.posts]
        this.change();
    }

    hendleActions(action) {
        switch(action.type) {
            case ADD_POST:
            this.addPost(action.data)
            break;
        case GET_POSTS:
        this.getPosts(action.data)
        break;
        }
    }

}

const store = new postStore();
dispatcher.register(store.hendleActions)
export default store;
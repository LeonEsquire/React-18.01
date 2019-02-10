import {ADD_USER, GET_USERS} from '../constants/userConstants';
import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';

export class userStore extends EventEmitter {
    constructor()
    {
        super(...arguments);
        this.users = [];
        this.getUsers = this.getUsers.bind(this);
        this.change = this.change.bind(this);
        this.addUser = this.addUser.bind(this);
        this.hendleActions = this.hendleActions.bind(this);
    }

    getUsers(users){
        this.users = users;
        this.change();
    }

    change()
    {
        this.emit('change')
    }

    addUser(user)
    {
        this.users = [user, ...this.users]
        this.change();
    }

    hendleActions(action) {
        switch(action.type) {
            case ADD_USER:
            this.addUser(action.data)
            break;
        case GET_USERS:
        this.getUsers(action.data)
        break;
        }
    }

}

const store = new userStore();
dispatcher.register(store.hendleActions)
export default store;
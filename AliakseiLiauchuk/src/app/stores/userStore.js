import {ADD_USER, GET_USERS} from '../constants/userConstants';
import dispatcher from '../dispatcher';
import {EventEmitter} from 'events';

class UserStore extends EventEmitter {
  constructor()
  {
    super(...arguments);
    this.users = [];
    this.getUsers = this.getUsers.bind(this);
    this.change = this.change.bind(this);
    this.addUser = this.addUser.bind(this);
    this.handleActions = this.handleActions.bind(this);
  }

  getUsers(users) {
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

  handleActions(action) {
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

const store = new UserStore();
dispatcher.register(store.handleActions)
export default store;
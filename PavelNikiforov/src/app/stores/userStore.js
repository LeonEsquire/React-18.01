import dispatcher from '../Dispatcher'
import {ADD_USER, GET_USERS} from '../constants/userConstants'
import {EventEmitter} from 'events'

class UserStore extends EventEmitter {
    constructor() {
        super(...arguments)
        this.users = []
        this.change = this.change.bind(this)
        this.addUser = this.addUser.bind(this)
        this.getUsers = this.getUsers.bind(this)
        this.handleActions = this.handleActions.bind(this)
    }

    change() {
        this.emit('change')
    }

    addUser(user) {
        this.users = [user, ...this.users]
        this.change()
    }

    getUsers(users) {
        this.users = users
        this.change()
    }

    handleActions(action) {
        const {type, data} = action
        switch (type) {
            case ADD_USER:
                this.addUser(data)
                break
            case GET_USERS:
                this.getUsers(data)
                break
        }
    }
}

const store = new UserStore
dispatcher.register(store.handleActions)
export default store
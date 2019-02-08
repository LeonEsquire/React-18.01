import React from 'react'
import UserList from '../components/UserList'
import {getUsers, addUser} from '../actions/userActions'
import store from '../stores/userStore'


class Users extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
        this.onUsersChange = this.onUsersChange.bind(this)
        this.newUser = this.newUser.bind(this)
    }

    onUsersChange() {
        this.setState({users: store.users})
    }

    newUser() {   
        const id = 0,
        username = 'testUser', 
        name = 'John Doe',
        email = 'test@test.com',
        phone = '+7 (000) 000-00-00',
        website = 'example.com'

        addUser(id, username, name, email, phone, website)
    }

    componentDidMount() {
        getUsers()
        store.on('change', this.onUsersChange)
    }

    render() {
        return (
            <>
                <button className="form__submit" onClick={this.newUser}>Add test user</button>
                <UserList users={this.state.users}/>
            </>
        )
    }
}

export default Users
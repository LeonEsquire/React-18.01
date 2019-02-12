import React from 'react'
import {connect} from 'react-redux'
import UserList from '../components/UserList'
import {fetchUsers, addUser} from '../actions/userActions'

class Users extends React.Component {
    constructor(props) {
        super(props)
        this.newUser = this.newUser.bind(this)
    }

    newUser() {   
        const id = 0,
        username = 'testUser', 
        name = 'John Doe',
        email = 'test@test.com',
        phone = '+7 (000) 000-00-00',
        website = 'example.com'

        this.props.dispatch(addUser(id, username, name, email, phone, website))        
    }

    componentDidMount() {
        this.props.dispatch(fetchUsers())
    }

    render() {
        return (
            <>
                <button className="form__submit" onClick={this.newUser}>Add test user</button>
                <UserList users={this.props.users}/>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.users
    }
}

export default connect(mapStateToProps)(Users)
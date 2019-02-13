import React from 'react'
import axios from 'axios'
import User from './User'

class UserList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.users.length) {
            return null;
        }

        const users = this.props.users.map((user, index) => {
            return <User key={index} {...user} />
        })

        return (
            <>
                <h1>Users</h1>
                {users}
            </>
        )
    }
}

export default UserList
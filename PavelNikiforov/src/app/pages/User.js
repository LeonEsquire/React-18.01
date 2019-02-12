import React from 'react'
import {connect} from 'react-redux'
import UserProfile from '../components/User'
import {fetchUsers} from '../actions/userActions'

class User extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchUsers(this.props.params.userId))
    }

    render() {
        console.log('This is User component')
        return (
            <>
                {this.props.users && <UserProfile {...this.props.users}/>}
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.users
    }
}

export default connect(mapStateToProps)(User)
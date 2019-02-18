import React from 'react';
import {connect} from 'react-redux';

import {fetchUsers} from '../actions/usersActions';
import UserInfo from './UserInfo';

class UserList extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const users = this.props.users.map((user, index) => {
            return (
                <UserInfo key={index} {...user}/>
            );
        });
        
        return (
            <div>
                <h1>Users</h1>
                {users}
            </div>
        );    
    }

    componentDidMount () {
        this.props.dispatch(fetchUsers());
    }

}
const mapStateToProps = (state) => ({users: state.users.users,})

export default connect(mapStateToProps)(UserList);
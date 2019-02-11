import React from 'react';
import UsersList from '../components/UsersList';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/usersActions';

class Users extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchUsers());
    }

    render() {
        if (this.props.users.length > 0) {
            return (
                <div>
                    {
                        <UsersList users={this.props.users}/>
                    }
                </div>
            );
        } else {
            return <div></div>
        }

    }
}

function mapStateToProps(state) {
    return {
        // user: state.user.user,
        // userFetched: state.user.fetched,
        users: state.users.users
    };
}

export default connect(mapStateToProps)(Users);
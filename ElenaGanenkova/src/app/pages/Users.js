import React from 'react';
import UsersList from '../components/UsersList';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/usersActions';

class Users extends React.Component {
    componentDidMount() {
        if (!this.props.children) {
            this.props.dispatch(fetchUsers());
        }
    }

    render() {
        if (!this.props.children)
        {
            if (this.props.users.length) {
                return (
                    <div>
                        {
                            <UsersList users={this.props.users}/>
                        }
                    </div>
                );
            } else {
                return <div>Lodaing...</div>
            }
        }
        return <div>
            {this.props.children}
        </div>

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
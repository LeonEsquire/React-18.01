import React from 'react';
import UserProfile from '../components/User';
import {connect} from 'react-redux';
import {fetchSingleUser} from '../actions/userActions';
import {fetchUsers} from "../actions/usersActions";

class User extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchSingleUser(this.props.params.id));
    }

    render() {
        return (
            <div>
                {this.props.user.fetchingUser ? 'single user will be here' : null}

                {this.props.user.singleUser && <UserProfile {...this.props.user.singleUser}/>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        // user: state.user.user,
        // userFetched: state.user.fetched,
        user: state.user
    };
}

export default connect(mapStateToProps)(User);
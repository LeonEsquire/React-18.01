import React from "react";
import {connect} from 'react-redux';
import {fetchUser} from '../actions/userActions';
import User from '../components/User'

class UsersList extends React.Component {

    render() {
        const users = this.props.user;
        const mappedUsers = users.map((user, index) => {return <User key={index} {...user}/>});
        return <div>
            <h1>CURRENT USERS</h1>
            <ul>{mappedUsers}</ul>
        </div>

    }

    componentDidMount() {
        this.props.dispatch(fetchUser())
    }


}

function mapStateToProps (state) {
    return {
        user: state.user.user,
        userFetched: state.user.fetched
    };
}

export default connect(mapStateToProps)(UsersList);

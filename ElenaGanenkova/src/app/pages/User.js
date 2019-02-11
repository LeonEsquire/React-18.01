import React from 'react';
import UserProfile from '../components/User';
import {connect} from 'react-redux';
import {fetchSingleUser} from '../actions/userActions';
import {fetchUsers} from "../actions/usersActions";

export default  class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        };


    }

    // componentDidMount() {
    //     this.props.dispatch(fetchSingleUser());
    //     console.log(this.state);
    // }

    render() {
        return (
            <div>
                single user will be here
                {/*{this.state.user && <UserProfile {...this.state.user}/>}*/}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        // user: state.user.user,
        // userFetched: state.user.fetched,
        users: state
    };
}

// export default connect(mapStateToProps)(User);
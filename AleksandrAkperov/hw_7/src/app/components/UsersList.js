import React from 'react';
import User from './User';
import { connect } from 'react-redux';
import {fetchUsers} from "../actions/userActions";

 class UsersList extends React.Component {
    
    render() {
        const users = this.props.users;
      
        const usersList = users.map((user, index) => {
            return <User key={index} {...user}/>
        });

        return (
            <div>
                <h1>Пользователи</h1>
                {usersList}
            </div>
        );
    }


    componentDidMount(){
        this.props.dispatch(fetchUsers())
        console.log ("Тут сработал метод componentDidMount")
    }

    

}

function mapStateToProps(state) {

    return {
        users:state.users.users,
        userFetch:state.users.fetched,
        comments: state.comments.comments
    }
}

export default connect(mapStateToProps)(UsersList);





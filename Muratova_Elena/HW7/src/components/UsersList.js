import React from "react";
import Users from "../pages/Users";
import User from "./User";
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/usersActions';

class UsersList extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            users: []
        };
    }
    componentDidMount() {
        this.props.dispatch(fetchUsers());
        this.setState({users: this.props.users.users})
      }

    render() {
        const users = this.props.users.users.map((user, index) => {
            return <User key={index} {...user} />
        }); ;
       
        return(
           <div>
               <h1>Пользователи</h1>
               {users}
            </div>
        );
    }  

}

const mapStateToProps = (state) => ({users: state,})

export default connect(mapStateToProps)(UsersList); 



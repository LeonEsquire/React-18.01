import React from "react";
import Users from "../pages/Users";
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/tweetsActions';

class UsersList extends React.Component {
    constructor (props) {
        super(props);
    }
    componentDidMount() {
        console.log("componentDidMount в деле");
        const { dispatch } = this.props
        dispatch(fetchUsers())
      }

    render() {
        console.log("V UsersList");
        //this.props.dispatch(fetchUsers())
        // const users = this.props.users.map((user, index) => {
        //     return <User key={index} {...user} />
        // }); 
        //this.props.dispatch(fetchUsers());
        const users = this.props.users.map((user, index) => {
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



import React from 'react';
import  UserList from '../components/UsersList';

export default class Users extends React.Component {
    render() {
        return (
            <div>
                {
                    (!this.props.children) ?
                        (<UserList/>)
                        :
                        (this.props.children)
                }
            </div>


        )
    }
}
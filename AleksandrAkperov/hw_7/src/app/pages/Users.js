import React from 'react';
import { Provider} from 'react-redux';
import store from '../store';
import  UsersList from '../components/UsersList';

export default class Users extends React.Component {
    render() {
        return (
           <Provider store = {store}>
                <UsersList/>
           </Provider> 


        )
    }
}
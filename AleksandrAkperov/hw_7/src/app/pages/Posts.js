import React from 'react';
import { Provider} from 'react-redux';
import store from '../store';
import  PostList from '../components/PostList';

export default class Posts extends React.Component {
    render() {
        return (
           <Provider store = {store}>
                <PostList/>
           </Provider> 


        )
    }
}
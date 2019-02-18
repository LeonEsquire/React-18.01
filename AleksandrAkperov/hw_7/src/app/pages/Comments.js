import React from 'react';
import { Provider} from 'react-redux';
import store from '../store';
import  CommentList from '../components/CommentList';

export default class Comments extends React.Component {
    render() {
        return (
           <Provider store = {store}>
                <CommentList/>
           </Provider> 


        )
    }
}
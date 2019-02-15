import React from 'react';
import { connect } from 'react-redux';
import {fetchUser} from "../actions/userActions";

 class Layout extends React.Component {

    

    render() {
        console.log(this.props);
        return <h1> 1 </h1>   
    }

    componentDidMount(){
        this.props.dispatch(fetchUser());
    }

}

function mapStateToProps(state) {

    return {
        user:state.user.users,
        userFetch:state.user.fetched,
        tweets: state.tweets.tweets
    }
}

export default connect(mapStateToProps)(Layout);
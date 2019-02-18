import React from 'react';
import {connect} from 'react-redux';

import {fetchUserCard} from '../actions/userCardActions';

import UserInfo from '../components/UserInfo';
import Post from '../components/Post';

class UserCard extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const posts = this.props.posts.map((post, index) => {
            return (
                <Post key={index} {...post}/>
            );
        })

        return(
            <div>
                <UserInfo {...this.props.user}/>
                <hr/>
                <h3>{this.props.user.username}'s posts</h3>
                <hr/>
                {posts}
            </div>
        );
    }

    componentDidMount () {
        const userID = this.props.params.userID;
        this.props.dispatch(fetchUserCard(userID));
    }
}

const mapStateToProps = (state) => ({
    user: state.userCard.user,
    posts: state.userCard.posts,
})


export default connect(mapStateToProps)(UserCard);
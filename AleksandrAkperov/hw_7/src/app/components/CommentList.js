import React from 'react';
import Comment from './Comment';
import { connect } from 'react-redux';
import {fetchComments} from "../actions/commentsActions";

 class CommentList extends React.Component {
     render() {
       
        const comments = this.props.comments;
      
        const commentList = comments.map((comment, index) => {
            return <Comment key={index} {...comment}/>
        });

        return (
            <div>
                <h1>Комментарии</h1>
                {commentList}
            </div>
        );
    }


    componentDidMount(){
        this.props.dispatch(fetchComments())
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

export default connect(mapStateToProps)(CommentList);
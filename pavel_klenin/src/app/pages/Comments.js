import React from 'react';
import {connect} from 'react-redux';

import {fetchComments} from '../actions/commentsActions';


import Comment from '../components/Comment';

class Comments extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        const comments = this.props.comments.map((comment, index) => {
            return (
                <Comment key={index} {...comment}/>
            );
        })

        return (
            <div>
                <h1>Comments</h1>
                {comments}
            </div>
        );
    }

    componentDidMount () {
        this.props.dispatch(fetchComments());
    }
}

const mapStateToProps = (state) => ({comments: state.comments.comments,})

export default connect(mapStateToProps)(Comments);
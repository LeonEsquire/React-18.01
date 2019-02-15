import React from 'react';
import CommentList from '../components/CommentList';

const Comments = props => {

    return (
        <div>
            {(!props.children) ?
                (<CommentList/>)
                :
                (props.children)}
        </div>
    );
};
export default Comments;
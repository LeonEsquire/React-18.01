import React, { useState, useEffect } from "react";
import CommentContent from '../components/Comment';
import axios from 'axios';

const Comment =props=> {
    const [comment, setComment] = useState({});

useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/comments/${props.params.commentId}`)
        .then(response => {
            setComment(response.data)
        });
    return () => {
        console.log('cleanup')
    };
},[]);


        return (
            <div>
                {comment && <CommentContent {...comment}/>}
            </div>
        );
};

export default Comment;
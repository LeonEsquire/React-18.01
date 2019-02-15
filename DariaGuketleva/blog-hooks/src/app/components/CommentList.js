import React, {useState, useEffect} from "react";
import axios from 'axios';
import Comment from './Comment';

const CommentList = props => {
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                setComments(response.data)
            });
        return () => {
            console.log('cleanup')
        };
    },[]);


    if (!comments.length) {
        return null;
    }

    const commentBlocks = comments.map((comment, index) => {
        return <Comment key={index} {...comment} />
    });

    return (
        <div>
            <h1>Комментарии</h1>
            {commentBlocks}
        </div>
    );
};

export default CommentList;
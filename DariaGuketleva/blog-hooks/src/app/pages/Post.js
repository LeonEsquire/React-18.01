import React, { useState, useEffect } from "react";
import PostContent from '../components/Post';
import axios from 'axios';

const Post =props=>{
    const [post, setPost] = useState({});
useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${props.params.postId}`)
        .then(response => {
            setPost(response.data)
        });
    return () => {
        console.log('cleanup')
    };
},[]);

        return (
            <div>
                {post && <PostContent post={post}/>}
            </div>
        );
};

export default Post;
import React, {useState, useEffect} from "react";
import axios from 'axios';
import Post from './Post';

const PostList = props => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            setPosts(response.data)
        });
    axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(response => {
            setUsers(response.data)
        });
    return () => {
        console.log('cleanup')
    };
},[]);

    if (!posts.length) {
        return null;
    }

    const postBlocks = posts.map((post, index) => {
        return <Post key={index} post={post}/>
    });

    return (
        <div>
            <h1>Статьи</h1>
            {postBlocks}
        </div>
    );
};

export default PostList;
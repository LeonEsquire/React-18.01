import React from 'react';
import PostList from '../components/PostList';

 const Posts =props=>{
        return (
            <div>
                {
                    (!props.children) ?
                        (<PostList/>)
                        :
                        (props.children)
                }
            </div>
        );
};

export default Posts;
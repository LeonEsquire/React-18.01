import React from 'react';
import PostsComp from '../components/PostsComp';

export default class Posts extends React.Component {
    render() {
        return (
            <div>
                {
                    (!this.props.children) ?
                        (<PostsComp/>)
                        :
                        (this.props.children)
                }
            </div>
        );
    }
}
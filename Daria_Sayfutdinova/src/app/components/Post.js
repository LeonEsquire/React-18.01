/*В файле Post.js: на основе переданных от Blog.js props’ов напишите JSX-код, который будет генерировать новый пост.*/
import React, {Component} from 'react';

class Post extends Component {
    render() {
        return (<div className='post'>
            <h2>{this.props.title}</h2>
            <p>{this.props.text}</p>
        </div>)
    }
}

export default Post;
import React from 'react';


class Post extends React.Component {
    render() {
        return (
            <div className='mb-5'>
                <a href={this.props.href}>{this.props.title}</a>
                <p>{this.props.body}</p>
                <p className="post-date">{this.props.date}</p>
            </div>
        );
    }
}


export default Post;
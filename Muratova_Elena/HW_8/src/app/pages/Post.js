import React from 'react';
import PostProfile from '../components/Post';
import axios from 'axios';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null
    };

    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.id}`)
    .then(response => {
      this.setState({post: response.data});
    });
  }

  render() {
    return (
      <div>
        {this.state.post && <PostProfile {...this.state.post}/>}
      </div>
    );
  }
}


export default Post;
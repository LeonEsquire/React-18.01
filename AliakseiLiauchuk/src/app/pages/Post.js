import React from 'react';
import PostItem from '../components/PostItem';
import axios from 'axios';

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null
    };

    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`)
    .then(response => {
      this.setState({post: response.data})
    });
  }

  render() {
    return (
      <div>
        {this.state.post && <PostItem {...this.state.post}/>}
      </div>
    );
  }
}
import React from 'react';
import SinglePost from '../components/Post';
import axios from 'axios';

export default class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: null
    };

    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
    .then(response => {
      this.setState({comment: response.data})
    });
  }

  render() {
    return (
      <div>
        {this.state.comment && <SinglePost {...this.state.comment}/>}
      </div>
    );
  }
}
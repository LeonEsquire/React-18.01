import React from 'react';
import axios from 'axios';
import SinglePost from './Post';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
    
    axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then(response => {
      this.setState({users: response.data})
    });
  }

  render() {
    if (!this.state.users.length) {
      return null;
    }

    const posts = this.state.users.map((post, index) => {
      return <SinglePost key={index} {...post} />
    });

    return (
      <div>
        <h1>Посты</h1>
        {posts}
      </div>
    );
  }
}
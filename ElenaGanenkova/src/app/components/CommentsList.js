import React from 'react';
import axios from 'axios';
import Comment from './Comment';

export default class Posts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
    
    axios.get('https://jsonplaceholder.typicode.com/comments/')
    .then(response => {
      this.setState({users: response.data})
    });
  }

  render() {
    if (!this.state.users.length) {
      return null;
    }

    const comments = this.state.users.map((comment, index) => {
      return <Comment key={index} {...comment} />
    });

    return (
      <div>
        <h1>Комменты</h1>
        {comments}
      </div>
    );
  }
}
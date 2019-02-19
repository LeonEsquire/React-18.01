import React from 'react';
import CommentProfile from '../components/Comment';
import axios from 'axios';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        comment: null
    };

    axios.get(`https://jsonplaceholder.typicode.com/comments/${this.props.params.id}`)
    .then(response => {
      this.setState({comment: response.data});
    });
  }

  render() {
    return (
      <div>
        {this.state.comment && <CommentProfile {...this.state.comment}/>}
      </div>
    );
  }
}


export default Comment;
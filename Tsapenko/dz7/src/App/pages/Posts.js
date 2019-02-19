import React from "react";
import PostsList from "../components/PostsList";

class Posts extends React.Component {
    render() {
        return(
            <div>
            {
              (!this.props.children) ?
              (<PostsList/>)
              :
              (this.props.children)
            }
          </div>
        );
    }
}

export default Posts;
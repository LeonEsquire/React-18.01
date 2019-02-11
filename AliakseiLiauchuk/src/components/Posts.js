import React from 'react'
import PropTypes from 'prop-types'
var _this = this;

const Posts = ({posts}) => (

  <ul>
    {Array.prototype.map.call(posts, function (post, index) {
      return <li>
          {post.username}
      </li>;
    }, _this)}
  </ul>
)

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts

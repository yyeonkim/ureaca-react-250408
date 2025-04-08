import React from 'react'
import PostListItem from './PostListItem.tsx'

function PostList({ list }) {
  return (
    <div>
      <div className="totalCount">
        <strong>TOTAL</strong>
        <span>{list.length}</span>
      </div>

      <ul className="postList">
        {list.map((item, index) => (
          <PostListItem key={index} item={item} />
        ))}
      </ul>
    </div>
  )
}

export default PostList

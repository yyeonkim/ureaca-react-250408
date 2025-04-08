import React from 'react'

function PostListItem({ item }) {
  return (
    <li className="postListItem">
      <p>{item}</p>
      <i className="fa-solid fa-trash-can" />
    </li>
  )
}

export default PostListItem

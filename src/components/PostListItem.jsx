import React from 'react';

function PostListItem({ item, onDelete }) {
  return (
    <li className="postListItem">
      <p>{item}</p>
      <i className="fa-solid fa-trash-can" onClick={() => onDelete(item)} />
    </li>
  );
}

export default PostListItem;

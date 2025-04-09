import React, { memo } from 'react';
import PostListItem from './PostListItem';

const PostList = memo(({ list, onDeleteItem }) => {
  return (
    <div>
      <div className="totalCount">
        <strong>TOTAL</strong>
        <span>{list.length}</span>
      </div>

      {list.length === 0 ? (
        <div className="emptyPostList">
          <i className="fa-regular fa-file fa-4x" />
          <p>등록된 여행지가 없습니다</p>
        </div>
      ) : (
        <ul className="postList">
          {list.map(item => (
            <PostListItem key={item} item={item} onDelete={onDeleteItem} />
          ))}
        </ul>
      )}
    </div>
  );
});

export default PostList;

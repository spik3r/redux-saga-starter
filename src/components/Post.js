import React from 'react';

const Post = (props) => {
    const {id, title, userId} = props;
    return <div className="post">
        <div className="post-info"><span className="post-label">id: </span> <span className="post-text">{id}</span>
        </div>
        <div className="post-info"><span className="post-label">userId: </span> <span
            className="post-text">{userId}</span></div>
        <div className="post-info"><span className="post-label">title: </span> <span
            className="post-text">{title}</span></div>
    </div>;
}
export default Post;
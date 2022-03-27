import React from "react";
import PostItem from "./PostItem";
const PostList = ({ posts, title }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <div>
        {posts.map((post, id) => (
          <PostItem post={post} id={id + 1} />
        ))}
      </div>
    </>
  );
};

export default PostList;

import React from "react";

const PostItem = function (props) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {" "}
          {props.id}
          {props.post.title}
        </strong>{" "}
        <div> {props.post.body}</div>{" "}
      </div>{" "}
      <div className="post__btns">
        <button> Deleate </button>{" "}
      </div>{" "}
    </div>
  );
};
export default PostItem;

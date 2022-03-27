import React from "react";
import styl from "./UI/Button/Buton.module.css";
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
        <button className={styl.button}> Deleate </button>{" "}
      </div>{" "}
    </div>
  );
};
export default PostItem;

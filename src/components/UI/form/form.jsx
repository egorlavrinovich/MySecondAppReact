import React from "react";
import Input from "../Input/Inputt";
import Buton from "../Button/Buton";
import { useState } from "react";
const Form = ({ addFunct }) => {
  const [post, editpost] = useState({ title: "", body: "" });
  const PropObj = {
    ...post,
  };
  const addFunc = (e) => {
    e.preventDefault();
    editpost({ title: "", body: "" });
    addFunct(PropObj);
  };
  return (
    <form>
      <Input
        value={post.title}
        type="text"
        Placeholder="Название поста"
        onChange={(e) => editpost({ ...post, title: e.target.value })}
      />
      <Input
        value={post.body}
        type="text"
        Placeholder="Описание поста"
        onChange={(e) => editpost({ ...post, body: e.target.value })}
      />
      <Buton onClick={addFunc}>Создать</Buton>
    </form>
  );
};

export default Form;

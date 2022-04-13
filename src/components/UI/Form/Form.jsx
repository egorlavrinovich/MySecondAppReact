import React from 'react';
import { useState } from 'react';
import Input from '../Input/input';
import Button from '../Button/Button';
const Form = ({CreateItem}) => {
    const [newItem,setItem] = useState({title:'',body:''})
    function addItem(e) {
        e.preventDefault()
        const NewPost = {...newItem, id:Date.now()}
        CreateItem(NewPost)
        setItem({title:'',body:''})
      }
    return (
        <form>
        <Input value={newItem.title} onChange={(e)=>setItem({...newItem, title:e.target.value}) } placeholder="Введите название"/>
        <Input value={newItem.body} onChange={(e)=>setItem({...newItem, body:e.target.value}) } placeholder="Введите описание"/> 
        <Button onClick={addItem}>Add</Button>
      </form>
    );
};

export default Form;
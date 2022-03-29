import React, {
  useState
} from 'react';
import Counter from './components/counter';
import CounterClass from './components/counterclass'
import './styles/App.css'
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import Buton from './components/UI/Button/Buton';
import Input from './components/UI/Input/Inputt';
import Form from './components/UI/form/form';
const App = () => {
  const [posts, Setposts] = useState([{
      id: 1,
      title: 'JS',
      body: 'Description'
    },
    {
      id: 2,
      title: 'JS 2',
      body: 'Description'
    },
    {
      id: 3,
      title: 'JS 3',
      body: 'Description'
    }
  ])

  const addNewPost = (PropObj) =>{
      Setposts([...posts,{...PropObj, id:Date.now()}])
  }

  const DeleteItem = (id) =>{
    Setposts(posts.filter(item=>item.id!=id))
  }

  return ( 
    <div> 
      <Form addFunct={addNewPost}/>
      {posts.length!=0?< PostList posts = {posts} title = "JSS" del={DeleteItem} />:<h1 style={{ textAlign: "center" }}>Посты не найдены</h1>}
    </div >

  );
};

export default App;
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

  const [post,AddNewPostName] = useState({body:'',title:''})

  const addNewPost = (e) =>{
      e.preventDefault();
      Setposts([...posts,{...post, id:Date.now()}])
      AddNewPostName({body:'',title:''})
  }

  return ( 
    <div> 
      <form>
        <Input value={post.title} type="text" Placeholder="Название поста" onChange={e => AddNewPostName({...post,title: e.target.value})}/>
        <Input value={post.body} type="text" Placeholder="Описание поста" onChange={e => AddNewPostName({...post,body:e.target.value})}/>
        <Buton onClick={addNewPost}>Создать</Buton>
      </form>
      < PostList posts = {posts} title = "JSS" />
    </div >

  );
};

export default App;
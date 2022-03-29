import React, {
  useState
} from 'react';
import './styles/App.css'
import PostList from './components/PostList';
import Form from './components/UI/form/form';
import Selection from './components/UI/Selection/Selection';
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

  const [itemSort,ConditonSort] = useState()

  const Sort = (sort) =>{
    console.log(itemSort)
    ConditonSort(sort)
  }

  return ( 
    <div> 
      <Form addFunct={addNewPost}/>
      <Selection Name='Сортировка' condition={[{name:'Название',value:'title'},{name:'Описанию',value:'body'}]} value={itemSort} onChange={Sort} />
      {posts.length!=0?< PostList posts = {posts} title = "JSS" del={DeleteItem} />:<h1 style={{ textAlign: "center" }}>Посты не найдены</h1>}
    </div >

  );
};

export default App;
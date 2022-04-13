import React, { useEffect, useMemo, useState } from 'react';
import Items from './components/Items';
import Form from './components/UI/Form/Form';
import Spisok from './components/UI/Spisok/Spisok';
import Search from './components/UI/Serch/Search';
import Modal from './components/UI/Modal/modal'
import Button from './components/UI/Button/Button';
import './components/css/App.css'
import { UsePosts } from './components/hooks/UsePosts'
import axios from 'axios';
import PostService from './API/PostService';
import Loder from './components/UI/Loder/Loder';

const App = () => {
const [data,setdata] = useState([])
const [Poisk,SetPoisk] = useState({SelectedPosts:'',SearchValue:''}) 
const [ActiveModal,SetModal] = useState(false) // Установка значения модального окна
const sortedAndSearchedPosts = UsePosts(data,Poisk.SelectedPosts,Poisk.SearchValue) // Наш кастомный хук, отвечающий за сортировку
const [isPostLoading, setIsPostLoading] = useState(false)

async function fetchPosts(){ // Подгрузка базы данных
  setIsPostLoading(true)
  setTimeout(async()=>{
    const posts = await PostService.getAll()
    setdata(posts)
    setIsPostLoading(false)
  },1000)
}

useEffect(()=>{ // Следим за перевым рендером компонента и выполняем нашу ф-цию
  fetchPosts()
 },[])


function onDeleate(id) {
  const index = (data.indexOf(data[id]))
  setdata([...data.slice(0,index),...data.slice(index+1)])
}
function add(NewItem) {
  setdata([...data,{...NewItem}])
  SetModal(false)
}

  return (
    <div>
      <Button onClick={()=>SetModal(true)}>Добавить пост</Button>
      <Modal Visible={ActiveModal} SetActive={SetModal}> <Form CreateItem={add} /></Modal>
      <Spisok fields={[{name:'Название',title:'title'},{name:'Описанию',title:'body'}]} ChoosePoint={SetPoisk} ValueofPoisk={Poisk} />
      <Search Apply={SetPoisk} value={Poisk}/>
      {isPostLoading
      ? <div style={{display:'flex',justifyContent:'center',marginTop:30}}><Loder/></div>
      : <Items data={sortedAndSearchedPosts} onDeleate={onDeleate}/>
      }
      { sortedAndSearchedPosts.length? <Items data={sortedAndSearchedPosts} onDeleate={onDeleate}/>:<h1 style={{textAlign:'center',color:'gray'}}>Posts Undefined</h1>}
    </div>
  );
};

export default App;
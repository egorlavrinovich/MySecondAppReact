import React, { useMemo, useState } from 'react';
import Items from './components/Items';
import Form from './components/UI/Form/Form';
import Spisok from './components/UI/Spisok/Spisok';
import Search from './components/UI/Serch/Search';
import Modal from './components/UI/Modal/modal'
import Button from './components/UI/Button/Button';
import './components/css/App.css'
import { UsePosts } from './components/hooks/UsePosts'

const App = () => {
  const [data,setdata] = useState([{
    id:Date.now(),
    title:"JS",
    body:"I try to learn it"
  }
])

const [Poisk,SetPoisk] = useState({SelectedPosts:'',SearchValue:''}) // Наш кастомный хук

// Установка значения модального окна

const [ActiveModal,SetModal] = useState(false)

const sortedAndSearchedPosts = UsePosts(data,Poisk.SelectedPosts,Poisk.SearchValue)

// Конец поиска по элементу

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
      {
        sortedAndSearchedPosts.length? <Items data={sortedAndSearchedPosts} onDeleate={onDeleate}/>:<h1 style={{textAlign:'center',color:'gray'}}>Posts Undefined</h1>
      }
    </div>
  );
};

export default App;
import React from 'react';

const Spisok = ({ChoosePoint,ValueofPoisk,fields}) => {
    return (
        <select
        value={ValueofPoisk.SelectedPosts}
        onChange={e=>ChoosePoint({...ValueofPoisk,SelectedPosts:e.target.value})}
        >
            {fields.map((item,index)=>
                <option key={index} value={item.title}>{item.name}</option>
                )}
        </select>
    );
};

export default Spisok;
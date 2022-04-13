import React from 'react';
import Input from '../Input/input';
const Search = (props) => {
    return (
        <form 
        value = {props.value.SearchValue}
        onChange={e=>props.Apply({...props.Poisk,SearchValue:e.target.value})}> 
            <Input/>
        </form>
    );
};

export default Search;
import React from 'react';
import Item from './Item';
import { TransitionGroup,CSSTransition } from 'react-transition-group';
const Items = ({data,onDeleate}) => {
  return(
      <div>
        <TransitionGroup>
          { data.map((post, id) => 
          <CSSTransition
          key={post.id}
          timeout={500}
          classNames="post"
        >
          <Item post={post} id={id + 1} onDeleate={()=>onDeleate(id) } /></CSSTransition>)}
          </TransitionGroup>
      </div>
  )
};

export default Items;
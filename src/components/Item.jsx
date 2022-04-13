import React from 'react';
import styl from './css/block.module.css'
const Item = (props) => {
    return (
      <div className={styl.block}>
        <div className={styl.post}>
        <div className={styl.post__content}>
            {props.id}.
            {props.post.title}
          <div className={styl.body}> {props.post.body}</div>
        </div>
        <div className={styl.btns}>
          <button onClick={props.onDeleate} > Deleate </button>
        </div>
      </div>
      </div>
    );
};

export default Item;
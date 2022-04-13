import React from 'react';
import styl from './modal.module.css'
const Modal = ({children,Visible,SetActive}) => {
    const StylClass =  [styl.modal]

    if (Visible){
       StylClass.push(styl.active) 
    }

    return (
        <div className={StylClass.join(' ')} onClick={()=>SetActive()}>
            <div className={styl.modalContent} onClick={(e)=>e.stopPropagation(e)}>{children}</div>
        </div>
    );
};

export default Modal;
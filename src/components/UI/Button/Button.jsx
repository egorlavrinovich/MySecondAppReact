import React from 'react';
import styl from './button.module.css'
const Button = ({children,...props}) => {
    return (
        <button className={styl.button} {...props}>
            {children} 
        </button>
    );
};

export default Button;
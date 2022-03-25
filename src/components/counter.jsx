import React from 'react';
import { useState } from 'react';

const Counter = function () {
    const [state,funcCount] = useState(0)
    function increment() {
        funcCount((x)=>x+1)
      }
    
      function decrement() {
        funcCount((x)=>x-1)
      }
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;
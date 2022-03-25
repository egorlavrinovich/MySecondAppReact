import React, { useState } from 'react';
import Counter from './components/counter';
import CounterClass from './components/counterclass'
const App = () => {
  const [state,importLikes] = useState(1)

  return (
    <div>
        <Counter/>
        <CounterClass/>
    </div>
  );
};

export default App;
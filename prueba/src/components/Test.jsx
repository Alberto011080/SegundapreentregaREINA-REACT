import React from 'react';
import { useState } from 'react';

const Test = ({mensaje}) => {
    
  const [count, setCount] = useState(0)

    return (
        <div>
            <h1>{mensaje}</h1>
            <p>Mejor que bien</p>
            <button onClick={() => setCount(count +1) }>SUMAR</button>
            <button onClick={() => setCount(count -1) }>RESTAR</button>
            
            <p>{count}</p>
        </div>
    );
}


export default Test;

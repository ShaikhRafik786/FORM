import React from 'react';
import { useState } from 'react';
const Counter = () => {
    const [count, setCount]=useState(0);
    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={()=> (count <10 ? setCount(count+1) : alert("counting limit end"))}>Increment</button>
            <button onClick={()=>(count> 1 ? setCount(count-1): alert("minimum number stop"))}>Decrement</button>
        </div>
    );
};
export default Counter;
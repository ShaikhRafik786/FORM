import React from 'react';
import { useState } from 'react';

const Todolist = () => {
    const [text,setText]=useState("");
    const [data, setData]=useState([]);

    const handleClick =() => {
        setData([...data,text])
    }

    return (
        <div>
            <h1>This is Todolist</h1>
            <input type="text"  placeholder="fill text"  onChange={(e)=> setText(e.target.value)} />
            <button onClick={handleClick} >Add</button>

            
            
        </div>
    );
};

export default Todolist;
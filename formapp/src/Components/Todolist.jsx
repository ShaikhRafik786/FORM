import React from 'react';
import { useState } from 'react';

const Todolist = () => {
    const [text,setText]=useState("");
    const [data, setData]=useState([]);

    const handleClick =() => {
        setData([...data,text])
    }
    const handleDelet = (item) => {
        const filtered = data.filter((e)=> e!== item )
        setData([...filtered])
    }

    return (
        <div>
            <h1>This is Todolist</h1>
            <input type="text"  placeholder="fill text"  onChange={(e)=> setText(e.target.value)} />
            <button onClick={handleClick} >Add</button>
             {data.map((item)=>{
                return(
                    <div>
                        <h1 >{item}</h1>
                        <button onClick={()=> handleDelet(item)}>delet</button>
                    </div>
                )
             })}

            
        </div>
    );
};

export default Todolist;
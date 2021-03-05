import React from 'react'
import {useState}from 'react'
export default function MyuseState() {
    
    const[count,setCount]= useState(0);
    const hendel =()=>setCount(count +1);
    return (
        <div>
            <h2>count:{count}</h2>
            <button onClick={hendel}>incriment</button>
        </div>
    ) 
}



import React,{useState} from 'react'

export default function MyuseState() {
    
    const[count,setCount]= useState(0);
    const hendel =()=>setCount(count +1);
    const hendel2 =()=>setCount(count -1);
    
    return (
        <div className="mx-auto">
            <h2>count:{count}</h2>
            <button onClick={hendel}>incriment</button>
            <button onClick={hendel2}>deccriment</button>
        </div>
    ) 
}



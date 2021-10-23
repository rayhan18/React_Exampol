import React from 'react'

export default function Props(props) {
    const heandel=(e)=>{
        console.log(e.target.value)
    }
    
    return (
        <div>
            <h3>helloo react</h3>
            <label htmlFor="search"></label>
            <input type="text" id="search" onChange={heandel}/> 
           <p>hello{props.name}</p>
        </div>
    )

    
}


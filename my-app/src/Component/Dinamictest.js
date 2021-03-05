import React from 'react'

export default function Dinamictest(props) {
    const style2={
        width:'200px',
        height:'200px',
        border:'3px solid gray',
        padding:'10px',
        margin:'auto',
        float:'left',
        borderRadius:'10px',
        marginRight:'10px'
    }
     const {name,price}=props.product
    
    return (
        <div style={style2}>
           
            <h4>{name}</h4>
            <h4>{price}</h4>
            <button>Buy now</button>
        </div>
    )
}

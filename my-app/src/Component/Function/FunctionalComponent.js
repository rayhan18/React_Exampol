import React from 'react'

export default function FunctionalComponent(props) {
    const mystyle={
        width:'200px',
        border:'5px solid red',
        padding:'20px',
        textAling:'center'
    }
    
    return (
        <div style={mystyle}>
            <h2 >name:{props.name} </h2>
            <p>age:{props.age}</p>
            <p>learn:{props.learn}</p><hr/>
            <div className='Contaner style2'>
                <h4></h4>
            </div>
        </div>
    )
}

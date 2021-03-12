import React, { useState,useEffect } from 'react'

export default function Covid19() {

    const [messages,setMessage] =useState([])

    useEffect(() => {
        fetch("https://api.covid19api.com/")
        .then(res=>res.json())
        .then(data=>{
        
            setMessage(data)
            
        }).catch(error=>{
            alert('error.message')
        })
       
        
    },[])
    const divstyle={
        width:'300px',
        height:'auto',
        border:'2px solid red',
       float:'left',
       marginLeft:'5px',
       marginBottom:'5px'
    }
    return (
        <div>
            <h2>message:covid </h2>
            {
               messages.map(message=>{
                    return (
                        <div style={divstyle}>
                         <h2>id:{message.countriesRoute.name} </h2>
                        <p></p>
                        <p>Name:{message.name}</p>
                        <p>email:{message.email}</p>
                        <p>body:{message.body}</p>
                        </div>
                        
                    )
                })
            }

        </div>
    )
}

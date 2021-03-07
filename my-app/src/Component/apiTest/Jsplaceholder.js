import React, { useEffect, useState } from 'react'

export default function Jsplaceholder(props) {
    
  //json plaseholder  
    const [users,setUsers] = useState([])

    useEffect(() => {
       
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            
            .then((data) => setUsers(data));
          
                }, [])
    return (
        <div>
            <h3> json data count :{users.length}</h3>
            {
                <ul>
                {users.map(user=> <li>{user.name}</li>)}
                {/* //not working */}
                <testing howmany={users.id}>something</testing>
                </ul>
              
               
                
            }
            <Counters name2={setUsers.data}></Counters> 
             {/* //not working */}
            <testing howmany={users.id}>something 2{users.id}</testing>
        </div>
    )
    
}
function testing(props){
    return <h3>count users name{props.name}</h3>
}
function Counters(props) {
    const [count,setCount]=useState(0)
    const hendelCounter=()=> setCount(count+1)
    return(
        <div>
            <h3> total count:{count}</h3>
            <button onClick={ hendelCounter}>counter</button>
            
        </div>
    )
}

function dynamicData(){
    const frots=[
        {name:'banana',color:'yolow'},
        {name:'mango',color:'red'},
        {name:'orenge',color:'yolow'},
        {name:'pinaple',color:'yolow'},
        {name:'jecfruite',color:'yolow'},
    ]
    
}
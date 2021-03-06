import React, { useEffect, useState } from 'react'

export default function Jsplaceholder() {
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
                </ul>
              
                    
                
            }
        </div>
    )
}

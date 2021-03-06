import React, { useEffect, useState } from 'react'

export default function Jsplaceholder() {
    const [users,setUsers] = useState([])

    useEffect(() => {
       
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => console.log(json));
                }, [])
    return (
        <div>
            <h3> json data count :{users.length}</h3>

        </div>
    )
}

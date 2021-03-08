import React from 'react'

export default function Maping() {

    const fruts=[
        {name:'banana',color:'yolow'},
        {name:'mango',color:'red'},
        {name:'orenge',color:'yolow'},
        {name:'pinaple',color:'yolow'},
        {name:'jecfruite',color:'yolow'},
    ]
    return (
        <div>
          { 
           fruts.map(frut =>  <h2>{frut.name}</h2>)
           }
           <h3>jet brince</h3>
        </div>
    )

}

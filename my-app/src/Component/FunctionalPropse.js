import React from'react';

function FunctionalPropse(props){
    const persons=['hanif','korim','roim','jodo','modo']


    return(
        <div>
        <h1>name:{props.name} age:{props.age}</h1>
       <ul>
           {
                persons.map(person=> <li>{person}</li>) 
           }
           
       </ul>
       </div>
    )
}





function person(params) {
    return(
       <h1>rayhan</h1>
    )
}
export default FunctionalPropse;
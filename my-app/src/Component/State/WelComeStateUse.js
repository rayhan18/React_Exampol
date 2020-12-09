import React, {Component}from 'react';


class WelComeStateUse extends Component{
    constructor(){
        super()
        this.state={ //sigle state
            name:"rayhan",//proparti:value
            age:30,
            hobi:'reading books',
            class: [10 ,11, 12], //aarary
            height:{
                class7:'30kg',
                class8:['40kg','55kg','70kg'],
                class9:'45kg'
            }
        }
    }

    render(){

        return(
            <div>
            <div class="Container">
                <h1>state</h1>
                  <h2>{this.state.name}</h2>
                  <h2>{this.state.age}</h2>
                  <h2>{this.state.hobi}</h2>
                 
                   {/* // arrary object state */}
                   <h2>{this.state.class[0]}</h2>  
                   <h2>{this.state.class7}</h2>  
                   <h2>{this.state.class8[1]}</h2>  
            </div>
            </div>
        );
    }
}
export default WelComeStateUse;


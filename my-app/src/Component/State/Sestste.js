

import React, {Component}from 'react';
import {Container}from'react-bootstrap';


class Sestste extends Component{

    constructor(){
        super()
        this.state={
            massege:'WelCome use setstaate'
        }
    }
    onchange(){
        this.setState({
            massege:'thank you' //object change with function
        })
    }
    render(){
        return(
           <div >
               <Container>
               <h1> this is setstates {this.state.massege}</h1>
               <button onClick={()=>this.onchange()}> button</button>
               </Container>
           
           </div>
        );
    }
}
export default Sestste;



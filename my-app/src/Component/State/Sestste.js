

import React, {Component}from 'react';
import {Container,Button}from'react-bootstrap';


class Sestste extends Component {

    constructor() {
        super()
        this.state = {
            massege: 'WelCome use setstaate',
            name: 'rayhan',
            count:0

        }
    }

    onchange() {
        this.setState({
            massege: 'thank you' //object change with function
        })
    }

    nameChange(a) {
        this.setState({name:a})

    }

    render(){
        return(
           <div >

               <Container>
               <h1> this is setstates {this.state.massege}</h1>
               <button onClick={()=>this.onchange()}> button</button>
                   <h1> this name change{this.state.name}</h1>
                   <Button onClick={this.nameChange.bind(this, "molla")}> button</Button>


                   <div>
                       <h2>{this.state.count}</h2>
                       <Button onClick={ ()=> {this.setState({count: this.state.count+1})}}>buttoncoutn</Button>
                   </div>
               </Container>
           
           </div>
        );
    }
}
export default Sestste;



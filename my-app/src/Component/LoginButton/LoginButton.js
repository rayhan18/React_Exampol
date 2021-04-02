
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class LoginButton extends Component {
    constructor(props){
        super(props)
    }

    hendelClick(){
        console.log('this is'.this)
    }
    render() {
        return (
            <div>
                <Button onClick={()=>this.hendelClick()}> click</Button>
            </div>
        )
    }

     NumberList(props) {
        const numbers = props.numbers;
        const listItems = numbers.map((number) =>
          <li>{number}</li>
        );
        return (
          <ul>{listItems}</ul>
        );
      }
    
}

  
 
 
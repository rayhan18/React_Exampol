import React, { Component } from 'react'
import Magnifier from "react-magnifier";
import belt from "../../Imges/belt.jpg";
import keyring from "../../Imges/keyring.jpg";

export default class magnifyImage extends Component {

    // npm install react-magnifier
    // https://www.npmjs.com/package/react-magnifier
    render() {
        const magnifyingGlass={
 listStyle:'square',
        }
        return (
            <div>
                <Magnifier style={magnifyingGlass} src={belt} width={500} />
                <img  src={ keyring} alt='balt'/>
                <h2>this is </h2>
            </div>
        )
    }
}

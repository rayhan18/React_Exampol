import React, { Component } from 'react'

export default class ImagLoder extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    render() {
        return (
            <div>
                <h2 className="text-center">img looder use</h2>
               <img src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg" alt="loderimg"/>
            </div>
        )
    }
}

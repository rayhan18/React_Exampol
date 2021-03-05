import React, { Component } from 'react'

export default class windowScriol extends Component {

    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <div>
                <h2>this is anather page or routeing click open window top </h2>
            </div>
        )
    }
}

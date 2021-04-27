import React, { Component } from 'react'
import {toast} from 'react-toastify'
import {Button} from 'react-bootstrap'
import 'react-toastify/dist/ReactToastify.css';
export default class ToastMessage extends Component {
    constructor(){
        super()
        this.toastAlert=this.toastAlert.bind(this)
    }
    toastAlert(){
        toast.success('this is toastify')
    }
    render() {
        return (
            <div className='app'>
                <h1>toast</h1>
                <Button onClick={this.toastAlert}>Toast </Button>
        

            </div>
        )
    }
}

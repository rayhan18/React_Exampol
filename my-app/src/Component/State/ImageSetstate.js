
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class ImageSetstate extends Component {
    constructor(){
        super()
        this.state={
            data:{
                images:[
                    'https://pixxelznet.com/wp-content/uploads/2017/02/Link-Building-Tool.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxpa0rr790u_Kf0uewWUFumoq6B-1VH73j8SZFovX1ISjET8QYq3bQeFoHsPfy_cNJZc&usqp=CAU',
                    'http://p5cdn4static.sharpschool.com/UserFiles/Servers/Server_3162582/Image/imagekw5.jpg'
                ],
                index:0
            }
           
        }
        this.nextImage=this.nextImage.bind(this)
    }
    nextImage(){
        this.setState({index:this.state.index+1})
    }
    render() {
        return (
            <div>
                <Button onClick={()=>this.setState({index:this.state.index-1})}>prev</Button>
                <img src={this.state.data.index} alt="images" />
                <Button onClick={this.nextImage}>next</Button>
            </div>
        )
    }
}

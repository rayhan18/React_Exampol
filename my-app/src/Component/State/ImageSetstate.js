
import React, { Component } from 'react'
import { Button,Container } from 'react-bootstrap'

export default class ImageSetstate extends Component {
    constructor(){
        super()
        this.state={
           
                images:[
                   "https://image.shutterstock.com/image-photo/riyadh-saudi-capital-main-financial-260nw-1490705324.jpg",
                   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxpa0rr790u_Kf0uewWUFumoq6B-1VH73j8SZFovX1ISjET8QYq3bQeFoHsPfy_cNJZc&usqp=CAU",
                  "http://p5cdn4static.sharpschool.com/UserFiles/Servers/Server_3162582/Image/imagekw5.jpg"
                ],
                index:0
            
           
        }
        this.nextImage=this.nextImage.bind(this)
    }
    nextImage(){
        this.setState({index:this.state.index+1})
    }
    render() {
        return (
            <div>
                <Container>
                <Button onClick={()=>{
                      this.setState({index:this.state.index -1})
                  }}>previews</Button>
                <img src={this.state.images[this.state.index]} />
               
                <Button onClick={this.nextImage}>next</Button>
                </Container>
                  
            </div>
        )
    }
}

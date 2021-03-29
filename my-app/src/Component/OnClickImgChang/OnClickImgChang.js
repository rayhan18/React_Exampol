import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import belt from '../../Imges/belt.jpg'
import keyring from '../../Imges/keyring.jpg'
import ladiesBag from '../../Imges/ladiesBag.jpg'

export default class OnClickImgChang extends Component {
 constructor(){
     super()
     this.state={
        images:[
            "https://image.shutterstock.com/image-photo/riyadh-saudi-capital-main-financial-260nw-1490705324.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxpa0rr790u_Kf0uewWUFumoq6B-1VH73j8SZFovX1ISjET8QYq3bQeFoHsPfy_cNJZc&usqp=CAU",
           "http://p5cdn4static.sharpschool.com/UserFiles/Servers/Server_3162582/Image/imagekw5.jpg"
         ],
      index1:0
    
       }
      this.conchangeImage=this.onchangeImage.bind(this)
 }
    onchangeImage(){
     this.setState({index1:this.state.images[0]})
    
    };
    render() {
        const mystyle={
            width:'200px',
            height:'200px',
            marginLeft: '300px'
        }
        const divStyle={
            width:'80px',
            height:'80px',
            display:'inline-block'
        }
        const divImg={
            width:'80px'
        }
        return (
            <div>
               <Container className='por-img'>
                   <img id="eee" style={mystyle} src={this.state.images[0]} alt="belt"/>
                   </Container> 
                   <Container className='thams-img'>

                    <div>
                        <img onClick={this.onchangeImage} src={this.state.images[1]}/>

                    </div>











                       <div style={divStyle}  >
                       <img style={divImg} onClick={(e)=>this.onchangeImage(e)}src={belt} alt="belt"/>
                       </div> 
                            <div style={divStyle} >
                            <img style={divImg} onClick={(e)=>this.onchangeImage(e)} src={keyring} alt="belt"/>
                            </div>
                        <div style={divStyle}  >
                        <img style={divImg} onClick={(e)=>this.onchangeImage(e)} src={ladiesBag} alt="belt"/>
                        </div>
                  
                   </Container>
            </div>
        )
    }
}

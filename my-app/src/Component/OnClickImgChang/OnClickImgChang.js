import React, { Component } from 'react'
import belt from '../../Imges/belt.jpg'
import keyring from '../../Imges/keyring.jpg'
import ladiesBag from '../../Imges/ladiesBag.jpg'

export default class OnClickImgChang extends Component {
 constructor(){
     super()
     this.state={

     }
     this.conchangeImage=this.onchangeImage.bind(this)
    
 }

    onchangeImage(e){
   console.log(e.target.value)
    console.log(e.target.outerHTML)
    // document.querySelector('.pro-img').src= e.target.outerHTML
        // const thumbs =document.querySelector('.thams-img').children
        // document.querySelector('.pro-img').src= e.children[0].src
       
        // for(let i=0; i<thumbs.length;i++){
        //     thumbs[i].classList.remove('active')
        // }
        // e.classlistToaddClass('active')
    
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
               <div className='por-img'>
                   <img style={mystyle} src={belt} alt="belt"/>
                   </div> 
                   <div className='thams-img'>
                       <div style={divStyle}  >
                       <img style={divImg} onClick={(e)=>this.onchangeImage(e)}src={belt} alt="belt"/>
                       </div> 
                            <div style={divStyle} >
                            <img style={divImg} onClick={(e)=>this.onchangeImage(e)} src={keyring} alt="belt"/>
                            </div>
                        <div style={divStyle}  >
                        <img style={divImg} onClick={(e)=>this.onchangeImage(e)} src={ladiesBag} alt="belt"/>
                        </div>
                  
                   </div>
            </div>
        )
    }
}

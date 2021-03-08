import React, { Component } from 'react'
import require from 'react'
import belt from '../../Imges/belt.jpg'
import keyring from '../../Imges/keyring.jpg'
import ladiesBag from '../../Imges/ladiesBag.jpg'
import sideBag from '../../Imges/sideBag.jpg'

export default class OnClickImgChang extends Component {
    constructor(){
        super()
        this.state={
            index:0,
            imageList:['img0','img1','img2','img3']
        }
        this.OnClickImgChang=this.OnClickImgChang.bind(this)
        this.OnClickImgBack=this.OnClickImgChang.bind(this)

        const img0= require('./Imges/belt.jpg')
        const img1= require('./Imges/keyging.jpg')
        const img2= require('./Imges/lsfirdBag.jpg')
        const img3=require('./Imges/sideBag.jpg')
        
        
    }
    OnClickImgChang(){
        if(this.state.index +1  === this.state.imageList.length){
            this.setState({index:0})
        }else{
            this.setState({
               index: this.state.index +1
            })
        }
    }
    OnClickImgBack(){
        if(this.state.index -1 === -1){
            this.setState({
                index:this.state.index -1
            })
        }else{
            this.setState({
                index:this.state.index-1
            })
        }
    }
   
    render() {
        return (
            <div>
                <img src={this.state.imageList[this.state.index]} />
                <button onClick={this.OnClickImgChang}> imagechange</button>
                <button onClick={this.OnClickImgBack}> imageback</button>
            </div>
        )
    }
}

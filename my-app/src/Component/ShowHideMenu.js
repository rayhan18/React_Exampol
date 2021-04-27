import React, { Component } from 'react'

export default class ShowHideMenu extends Component {
    constructor() {
        super();
        
        this.state = {
          showMenu: false,
          menu:'d-none'
        };
        
        this.showMenu = this.showMenu.bind(this);
       
      }
      
      showMenu() {
          if(this.state.showMenu===false){
              this.setState({menu:'',showMenu:true})
          }else{
            this.setState({menu:'d-none',showMenu:false})
          }
       
       
      }
      
     
    
      render() {
        return (
          <div>
            <button className="" onClick={this.showMenu}>
              Show menu
            </button>
            <div className={this.state.menu}>
                    <button> Menu item 1 </button>
                    <button> Menu item 2 </button>
                    <button> Menu item 3 </button>
                  </div>
            
           
          </div>
        );
      }
    }
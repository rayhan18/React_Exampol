import React, {Component}from'react';


class ClassComponentProps extends Component{
    render(){
        return(
            <div>
                    <h1>name:{this.props.name}</h1>
            </div>
        )
    } 
    
};
export default ClassComponentProps;
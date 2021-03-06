import React from 'react';
import './App.css';
import Seststate from './Component/State/Sestste';
import FunctionalPropse from './Component/FunctionalPropse';
import ClassComponentProps from './Component/ClassComponentProps';
import FunctionalComponent from './Component/Function/FunctionalComponent';

import Dinamictest from './Component/Dinamictest';
import MyuseState from './Component/Hooks/MyuseState';




function App() {
  const products=[
    {name:'photoshop',price:'$200'},
    {name:'illastator',price:'$800'},
    {name:'adovixd',price:'$500'},
    {name:'photoshop',price:'$200'},
    {name:'illastator',price:'$800'},
    {name:'adovixd',price:'$500'},
    {name:'photoshop',price:'$200'},
    {name:'illastator',price:'$800'},
    {name:'adovixd',price:'$500'}
  ]
  return (
    <div >
      <Seststate/>
      <FunctionalPropse name='rayhan'age='25'/>
      <ClassComponentProps name='rayhan'/>
      <FunctionalComponent name='rayhan' age='30' learn='react'/>
      <FunctionalComponent name='rayhan' age='30' learn='react'/>
      <FunctionalComponent name='rayhan' age='30' learn='react'/>
      {
        products.map(product=> <Dinamictest product={product}></Dinamictest>)
      }
      <MyuseState/>
      
    </div>
  );
}

export default App;

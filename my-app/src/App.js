import React from 'react';
import './App.css';
import Seststate from './Component/State/Sestste';
import FunctionalPropse from './Component/FunctionalPropse';
import ClassComponentProps from './Component/ClassComponentProps';



function App() {
  return (
    <div >
      <Seststate/>
      <FunctionalPropse name='rayhan'age='25'/>
      <ClassComponentProps name='rayhan'/>
    </div>
  );
}

export default App;

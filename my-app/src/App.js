import {StoreProvider,createStore,action}from 'easy-peasy'
import React from 'react';
import './App.css';
import Seststate from './Component/State/Sestste';
import FunctionalPropse from './Component/FunctionalPropse';
import ClassComponentProps from './Component/ClassComponentProps';
import FunctionalComponent from './Component/Function/FunctionalComponent';

import Dinamictest from './Component/Dinamictest';
import MyuseState from './Component/Hooks/MyuseState';
import Jsplaceholder from './Component/apiTest/Jsplaceholder';

import Maping from './Component/mapTest/Maping'
import OnClickImgChang from './Component/OnClickImgChang/OnClickImgChang';
import EcomNavbar from './Component/Ecommarce/EcomNavbar';
import HeaderEmajon from './Component/Ecommarce/HeaderEmajon';
import Covid19 from './Component/ApiCovid19/Covid19';
import MagnifyImage from './Component/OnClickImgChang/magnifyImage';
import ImageSetstate from './Component/State/ImageSetstate';
import LoginButton from './Component/LoginButton/LoginButton';
import ZoomImage from './Component/ZoomImg/ZoomImage';






function App() {

  const store = createStore({
    todos: ['Create store', 'Wrap application', 'Use store'],
    addTodo: action((state, payload) => {
      state.todos.push(payload);
    }),
  });

  const products=[
    {name:'photoshop',price:'$200'},
    {name:'illastator',price:'$800'},
    {name:'adovixd',price:'$500'},
    {name:'photoshop',price:'$200'},
    {name:'illastator',price:'$800'},
    {name:'adovixd',price:'$500'},
    {name:'photoshop',price:'$200'},
    {name:'illastator',price:'$800'},
    {name:'adovixd',price:'$500'},
    {name:'photoshop',price:'$200'},
    {name:'illastator',price:'$800'},
    {name:'adovixd',price:'$500'},
    {name:'photoshop',price:'$200'},
    {name:'illastator',price:'$800'},
    {name:'adovixd',price:'$500'},
    {name:'photoshop',price:'$200'},
    {name:'illastator',price:'$800'},
    {name:'adovixd',price:'$500'},
  ]
  const numbers = [1, 2, 3, 4, 5];
  return (
    <StoreProvider store={store}>
       {/* <EcomNavbar/>
       <HeaderEmajon/> */}
      {/* <Seststate/>
      <FunctionalPropse name='rayhan'age='25'/>
      <ClassComponentProps name='rayhan'/>
      <FunctionalComponent name='rayhan' age='30' learn='react'/>
      <FunctionalComponent name='rayhan' age='30' learn='react'/>
      <FunctionalComponent name='rayhan' age='30' learn='react'/> */}
      {
        products.map(product=> <Dinamictest product={product}></Dinamictest>)
      }
             <MyuseState/>
       <Jsplaceholder/>
        <Maping/>
        <OnClickImgChang/>
       <ImageSetstate/>
         <MagnifyImage/>
       <LoginButton numbers={numbers}/>
       <ZoomImage/>
    </StoreProvider>
  );
 
}

export default App;

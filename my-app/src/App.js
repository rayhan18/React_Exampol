import {StoreProvider,createStore,action}from 'easy-peasy'
import React from 'react';
import './App.css';

import Dinamictest from './Component/Dinamictest';
import MyuseState from './Component/Hooks/MyuseState';
import Jsplaceholder from './Component/apiTest/Jsplaceholder';

import Maping from './Component/mapTest/Maping'
import OnClickImgChang from './Component/OnClickImgChang/OnClickImgChang';

import MagnifyImage from './Component/OnClickImgChang/magnifyImage';
import ImageSetstate from './Component/State/ImageSetstate';
import LoginButton from './Component/LoginButton/LoginButton';
import ZoomImage from './Component/ZoomImg/ZoomImage';

import { ToastContainer} from 'react-toastify';
import ToastMessage from './Component/ToastMessage/ToastMessage';
import GoogleMap from './Component/GoogleMaps';
import ImagLoder from './Component/Loder/ImagLoder';
 import  AutocomplateForm from './Component/Autoconplate/AutocomplateForm'
import SearchAutoComplate from './Component/Autoconplate//Searchmenual/SearchAutoComplate'
import Props from './Component/Props/Props'
import Hook1 from"./Component/Hooks/Hook1"
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
       <ToastMessage/>
       <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
              <ImagLoder/>
{/* Same as */}
<ToastContainer />

  <GoogleMap/>
  <AutocomplateForm/>
  <SearchAutoComplate/>
  <Props name="Rayhan"/>
  <Hook1/>
    </StoreProvider>
 
  );
 
}

export default App;

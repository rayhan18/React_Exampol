import React from 'react'
import {UseStoreState}from 'easy-peasy'

export default function EasyPaesyStore() {

    const myState =UseStoreState(state=>state.todos.items)
  console.log(myState)
    return (
        <div>
            <input type="text"/>
        </div>
    )
}

import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import {createStore}  from 'redux'
//initial store 
const initialstate  = {
  count: 78
}
function reducer(state, action){
  console.log({state, action})
  if(action.type ==="decrease"){
    return {count: state.count-1}
  }
  return state
}

const store  =  createStore(reducer, initialstate)
console.log(store)

store.dispatch({type:'decrease'})
console.log(store.getState())
function App() {
  // cart setup

  return (
    <main>
      <Navbar cart = {store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
 
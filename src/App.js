import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import {createStore}  from 'redux'
//initial store 
import reducer from './reducer'

import * as actions from './actions'
import {Provider} from 'react-redux'
const initialstate  = {
  cart: cartItems, 
  total: 105,
  amount: 5
}


const store  =  createStore(reducer, initialstate)





console.log(store.getState())
function App() {
  // cart setup

  return (
    <Provider store  = {store}>
      <Navbar />
      <CartContainer  />
    </Provider>
  );
}

export default App;
 
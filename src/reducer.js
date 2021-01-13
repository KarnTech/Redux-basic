import * as actions from './actions'




function reducer(state, action){
    console.log({state, action})
    if(action.type === actions.decrease){

        let tempCart  = []

        if(action.payload.amount  === 1){
            tempCart =  state.cart.filter((item) => item.id !== action.payload.id)
        } else
        { tempCart = state.cart.map(cartItem => {
            if (cartItem.id === action.payload.id) {
              cartItem = { ...cartItem, amount: cartItem.amount - 1 };
            }
            return cartItem;
          })};
      
          return { ...state, cart: tempCart };
        
    }
  
    if(action.type === actions.increase){
        let tempCart  = state.cart.map((i) => {
            if(i.id  === action.payload.id){
                i = {...i, amount: i.amount +1}
            }
            return i
        })

      return {...state, cart:tempCart }
    }
    if(action.type === actions.clearcart){
        return {...state, cart: [] }
    }
    if(action.type === actions.remove){
        return {...state, cart: state.cart.filter((cartitem)  => cartitem.id !== action.payload.id )}
    }

    if(action.type === actions.gettotals){
        let {total, amount}  = state.cart.reduce((cartTotal, cartItem) => {
            console.log(cartItem)
            const {price, amount} = cartItem;
            const itemTotal  =  price * amount
            cartTotal.amount  += amount;
            cartTotal.total  += itemTotal
            return cartTotal
        }, {total:0, amount:0})
        total  =  parseFloat(total.toFixed(2))
        return {...state, total, amount}
    }
  
  
    return state
  }


  export default reducer
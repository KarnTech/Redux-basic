import * as actions from './actions'




function reducer(state, action){
    console.log({state, action})
    if(action.type === actions.decrease){
      return {...state, count: state.count-1 }
    }
  
    if(action.type === actions.increase){
        let tempCart  = state.cart.map((i) => {
            if(i.id  === action.payload.id){
                i = {...i, amount: i.amount +1}
            }
            return i
        })

        console.log(tempCart)
      return {...state, cart:tempCart }
    }
    if(action.type === actions.clearcart){
        return {...state, cart: [] }
    }
    if(action.type === actions.remove){
        return {...state, cart: state.cart.filter((cartitem)  => cartitem.id !== action.payload.id )}
    }
  
  
    return state
  }


  export default reducer
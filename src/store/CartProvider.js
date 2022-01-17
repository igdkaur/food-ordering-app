import React, {useReducer} from 'react'
import CartContext from './cart-context'


const defaultCartState = {
  items : [],
  totalAmount : 0
}

const cartReducer = (state, action) => {
 return defaultCartState;
}

const CartProvider = (props) => {

const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)


  const addItemToCartHandler = (item) => {
      
  }

  const RemoveItemFromCartHandler = (id) => {
      
  }

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: RemoveItemFromCartHandler
  }

  return (
    <CartContext.Provider value  = {cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider

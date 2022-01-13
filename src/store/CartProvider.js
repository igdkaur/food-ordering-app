import React from 'react'
import CartContext from './cart-context'

const CartProvider = (props) => {

const addItemToCartHandler = () => {
    
}

const RemoveItemFromCartHandler = () => {
    
}

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: RemoveItemFromCartHandler
  }

  return (
    <CartContext.Provider>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider

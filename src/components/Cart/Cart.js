import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import { useContext,useState } from 'react';
import Checkout from './Checkout';

const Cart = (props) => {

  const [isOrdered, setIsOrdered] =useState(false)  

  const cartCtx = useContext(CartContext); 

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const handleOnRemove = (id) => {
    cartCtx.removeItem(id);
  }

  const handleOnAdd = (item) => {
    cartCtx.addItem({...item,amount:1});
  }

  const handleOnOrder = () => {
    setIsOrdered(true);
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          amount={item.amount}
          name={item.name}
          price={item.price}
          onRemove = {handleOnRemove.bind(null, item.id)}
          onAdd = {handleOnAdd.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose = {props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isOrdered && <Checkout/>}
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick = {props.onClose}>Close</button>
        <button className={classes.button} onClick={handleOnOrder}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
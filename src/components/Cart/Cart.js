import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import { useContext,useState } from 'react';
import Checkout from './Checkout';

const Cart = (props) => {

  const [isCheckout, setIsCheckout] =useState(false)  

  const cartCtx = useContext(CartContext); 

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const handleOnRemove = (id) => {
    cartCtx.removeItem(id);
  }

  const handleOnAdd = (item) => {
    cartCtx.addItem({...item,amount:1});
  }

  const handleOnOrder = () => {
    setIsCheckout(true);
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

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={handleOnOrder}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onClose = {props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onClose} />}
      {!isCheckout && modalActions}
    </Modal>
  );
};

export default Cart;
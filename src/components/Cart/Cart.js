import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import React, { useContext,useState } from 'react';
import Checkout from './Checkout';

const Cart = (props) => {

  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting,setIssubmitting] = useState(false);
  const [didSubmit,setDidSubmit] = useState(false); 
 

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

  const handleSubmitOrder = async (userData) => { //data sbmted to server
    setIssubmitting(true);
    await fetch('https://food-ordering-app-c54ca-default-rtdb.firebaseio.com/orders.json',{
      method: 'POST',
      body: JSON.stringify({
        user:userData,
        orderedItems: cartCtx.items
      })
    });
    setIssubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
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

  const cartModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={handleSubmitOrder} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>

  const didSubmitModalContent = <React.Fragment>
    <p>Successfully sent the order...</p>
    <div className={classes.actions}>
      <button className={classes.button} onClick={props.onClose}>
        Close
      </button>
    </div>
  
  </React.Fragment>
  


  return (
    <Modal onClose = {props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
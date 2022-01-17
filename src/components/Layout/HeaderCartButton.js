import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext); 
  const cartItemsCount = cartCtx.items.reduce((cn,item) => {
    return cn + item.amount
  },0);

  return (
    <button className={classes.button} onClick = {props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
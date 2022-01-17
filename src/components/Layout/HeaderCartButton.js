import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import { useContext,useState, useEffect} from 'react';

const HeaderCartButton = (props) => {

  
  const cartCtx = useContext(CartContext); 
  const cartItemsCount = cartCtx.items.reduce((cn,item) => {
    return cn + item.amount
  },0);

  const {items} = cartCtx;

  const [btnIsHigh, setBtnIsHigh] = useState(false)
  useEffect(() => {
    if(items.length === 0) {
      return;
    }

    setBtnIsHigh(true);

    const timer = setTimeout(()=> {
      setBtnIsHigh(false);
    }, 300)

    return () => {
      clearTimeout(timer);
    }
  }, [items])


  const btnClasses = `${classes.button} ${btnIsHigh ? classes.bump : ''}`

  return (
    <button className={btnClasses} onClick = {props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
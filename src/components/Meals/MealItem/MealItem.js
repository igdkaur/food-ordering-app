import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {

  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const handleAddToCart = (amount) => {
    cartCtx.addItem({
      id : props.id,
      name : props.name,
      amount : amount,
      price : props.price 
    })
    
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div> <MealItemForm onAddToCart = {handleAddToCart}/> </div> 
    </li>
  );
};

export default MealItem; 



// see the markup for this 
// one div to wrap name dscptn price
// individual divs for name dscptn
// and another dic for amount and form 
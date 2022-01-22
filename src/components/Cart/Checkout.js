import classes from './Checkout.module.css';
import { useRef,useState } from 'react';


const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {

  const  [formInputsValidity,setFormInputsValidity] = useState({
    name: true,
    street:true,
    city:true,
    postalCode:true
  })

  const nameInputRef = useRef();  
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
  const enteredName = nameInputRef.current.value;  
  const enteredStreet = streetInputRef.current.value;  
  const enteredPostal = postalInputRef.current.value;
  const enteredCity = cityInputRef.current.value;
  console.log("name",enteredName)

  const enteredNameIsValid = !isEmpty(enteredName);
  const enteredStreetIsValid = !isEmpty(enteredStreet);
  const enteredPostalIsValid = isFiveChars(enteredPostal);
  const enteredCityIsValid = !isEmpty(enteredCity);

  setFormInputsValidity({
    name:enteredNameIsValid,
    street:enteredStreetIsValid,
    city:enteredCityIsValid,
    postalCode:enteredPostalIsValid
  })
  console.log("hey",formInputsValidity)


  const formIsValid = enteredNameIsValid && 
  enteredStreetIsValid &&  enteredPostalIsValid && enteredCityIsValid;

  if(!formIsValid) {
    return;
  }
  //submitdata


  };

  
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formInputsValidity.name ? '': classes.invalid}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name'ref={nameInputRef} />
        {!formInputsValidity.name && <p> Please enter valid name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street'ref={streetInputRef} />
        {!formInputsValidity.street && <p> Please enter valid street</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef}/>
        {formInputsValidity.postal && <p> Please enter valid postal</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
        {!formInputsValidity.city && <p> Please enter valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
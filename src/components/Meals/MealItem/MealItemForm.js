import React,{useRef} from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = () => {

  const amountInputRef = useRef();

  

  const handleSubmit = (event) => {
      event.preventDefault();
      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber = +enteredAmount;

      props.onAddToCart(enteredAmountNumber)
  }

  return (
    <form className={classes.form} onSubmmit = {handleSubmit}>
      <Input
        ref = {amountInputRef},
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;

// input is js oBject
// dont handle the props on input just distribute them

import React from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css' 


const MealItemForm = () => {
  return (
    <form className = {classes.form} >
      <Input label = "Amount" input = {{
        id : 'amount' ,
        type : 'number',
        min : '1',
        max : '5',
        defaultValue : '1',
      }}
      />
      <button>
        + Add
      </button>
      
    </form>
  )
}

export default MealItemForm


// input is js oBject 
// dont handle the props on input just distribute them
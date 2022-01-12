import classes from './Input.module.css' 
import React from 'react'

const Input = (props) => {
  return (
    <div className = {classes.input} >
      <label> {props.label} </label>
      <input {...props.input} />
      
    </div>
  )
}

export default Input


// label should be configurable
// pass to input
// - id  as props
// - other configurable Data as props
//  - {...props.input} - all key value pairs in input object 
//  which we recieve on props input are added as props to input

//  using spread operator on input tag
//  making this input configurable outside the Component through input prop
//  can also omit id - {props.input.id} 

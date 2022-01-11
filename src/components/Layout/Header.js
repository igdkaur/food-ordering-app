import React from 'react'
import classes from './Header.module.css'
import mealsImg from '../../assets/meals.jpg' // .jpg rqrd


const Header = () => {
  return (
    <div>
      <header>
        <h2> Wine & Dine </h2>
      </header>
      <div>
        <img src = {mealsImg} alt= "delicious food"/> 
      </div>
    </div>
  )
}

export default Header





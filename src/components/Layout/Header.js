import React from 'react'
import classes from './Header.module.css'
import mealsImg from '../../assets/meals.jpg' // .jpg rqrd
import HeaderCartButton from './HeaderCartButton'


const Header = () => {
  
  return (
    <>
      <header className={classes.header}>
        <h2> Wine & Dine </h2>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
        <img src = {mealsImg} alt= "delicious food"/> 
      </div>
    </>
  )
}

export default Header





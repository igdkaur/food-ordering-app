import React, {useState} from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {


const [cartIsShown,setCartIsShown] = useState(false);

const handleCartShow = () => {
  setCartIsShown(true)
}

const handleCartClose = () => {
    setCartIsShown(false)
}

  return (
    <CartProvider>
    {cartIsShown && <Cart onClose = {handleCartClose}/>}
      <Header onShowCart = {handleCartShow} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

// open cart only when your cart clicked

// 1. close by default -
// 2. render conditionally
// 3. close on close button click
// 4. close on backdrop click

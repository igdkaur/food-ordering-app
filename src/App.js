import React, {useState} from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {

const [cartIsShown,setCartIsShown] = useState(false);

const handleCartShow = () => {
  setCartIsShown(true)
}

  return (
    <>
    {cartIsShown && <Cart/>}
      <Header onShowCart = {handleCartShow}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;

// open cart only when your cart clicked

// close by default -
// render conditionally
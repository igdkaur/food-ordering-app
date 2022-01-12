import React, {useState} from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {

const [showCart,setShowCart] = useState(false);


  return (
    <>
    {showCart && <Cart/>}
      <Header />
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
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext([0, () => { }]);

const CartProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  return (
    <CartContext.Provider value={[counter, setCounter]}>
      { children}
    </CartContext.Provider>
  )
}

function useCounter() {
  const context = useContext(CartContext);

  return context;
}

export {
  CartProvider,
  useCounter,
}

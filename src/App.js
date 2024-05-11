import React, { useState } from "react";
import "./index.css";
import MotorBody from "./MotorBody";
import KartBody from "./KartBody";
import motorcycles from "./Data";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((i) => i.model === item.model);
    if (existingItem) {
      addQuantity(existingItem);
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  const addQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((i) =>
        i.model === item.model ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  };

  const subtractQuantity = (item) => {
    setCartItems((prevItems) =>
      prevItems.map((i) =>
        i.model === item.model
          ? { ...i, quantity: Math.max(1, i.quantity - 1) }
          : i
      )
    );
  };

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  return (
    <div className="App">
      <MotorBody addToCart={addToCart} />
      <KartBody
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        addQuantity={addQuantity}
        subtractQuantity={subtractQuantity}
        imgSRC={cartItems[0]?.imgSRC}
        total={getTotal()}
      />
    </div>
  );
}

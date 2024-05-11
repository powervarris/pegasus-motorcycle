import React, { useState } from "react";
import "./index.css";
import MotorBody from "./MotorBody";
import KartBody from "./KartBody";
import motorcycles from "./Data";

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (item) => {
    setCartItems((prevItems) => prevItems.filter((i) => i !== item));
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <div className="App">
      <MotorBody addToCart={addToCart} />
      <KartBody
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        imgSRC={cartItems[0]?.imgSRC}
      />
    </div>
  );
}

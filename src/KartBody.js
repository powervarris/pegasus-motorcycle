import React from "react";
import MotoKart from "./MotoKart";

function KartBody({ cartItems, removeFromCart, imgSRC }) {
  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>MotoKart</h2>
      <div className="card-container">
        <MotoKart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          imgSRC={imgSRC}
        />
      </div>
    </div>
  );
}

export default KartBody;

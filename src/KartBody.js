import React from "react";
import MotoKart from "./MotoKart";
import "./KartBody.css";

function KartBody({
  cartItems,
  removeFromCart,
  addQuantity,
  subtractQuantity,
  imgSRC,
  total,
}) {
  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>MotoKart</h2>
      <div className="card-container">
        <MotoKart
          cartItems={cartItems}
          removeFromCart={removeFromCart}
          addQuantity={addQuantity}
          subtractQuantity={subtractQuantity}
          imgSRC={imgSRC}
          total={total}
        />
      </div>
    </div>
  );
}

export default KartBody;

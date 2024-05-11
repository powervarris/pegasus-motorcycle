import React from "react";

function MotoKart({ cartItems, removeFromCart, imgSRC }) {
  if (cartItems.length === 0) {
    return (
      <div className="cart-items">
        <h2>
          Looks like your cart's running on empty in the motor lane. Time to
          fuel up with some rev-worthy rides!
        </h2>
      </div>
    );
  }

  return (
    <div className="cart-items">
      {cartItems.map((item, index) => {
        return (
          <div key={index}>
            <img src={imgSRC} alt={item.model} />
            <h2>{item.model}</h2>
            <p>Manufactured by {item.brand}</p>
            <p>Color: {item.color}</p>
            <p>Price: ₱{item.price}</p>
            <button onClick={() => removeFromCart(item)}>
              Remove from MotoKart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default MotoKart;

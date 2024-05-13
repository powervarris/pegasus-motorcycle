import React from "react";
import "./MotoKart.css";

function MotoKart({
  cartItems,
  removeFromCart,
  addQuantity,
  subtractQuantity,
  total,
}) {
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
    <div className="motokart-container">
      <div className="motokart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="motokart-item">
            <div className="motokart-image">
              <img src={item.imgSRC} alt={item.model} />
            </div>
            <div className="motokart-details">
              <h2>{item.model}</h2>
              <p>Manufactured by {item.brand}</p>
              <p>Color: {item.color}</p>
              <div className="motokart-price">
              <h2>Price:</h2>
              <br/>
              <p>₱{item.price}</p>
              </div>
              <div className="quantity-container">
              <h2>Quantity</h2>
                <button
                  onClick={() => subtractQuantity(item)}
                  disabled={item.quantity === 1}
                >
                  ---
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => addQuantity(item)}>+++</button>
              </div>
              <div className="motokart-total-per-item">
                <h2>Total:</h2>
                <span>₱{item.price * item.quantity}</span>
              </div>
              <button onClick={() => removeFromCart(item)} className="removalbutton">
                <img src="./Untitled-removebg-preview.png" alt="removal"/>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="motokart-summary">
      <h4>{cartItems.length} Items</h4> <h2>Total:</h2>
        <div className="motokart-total">
          <h3>₱{total}</h3>
        </div>
      </div>
    </div>
  );
}

export default MotoKart;

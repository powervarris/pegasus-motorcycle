import React from "react";
import { IoMdAdd } from "react-icons/io";
import "./MotoKart.css";
import { GrSubtractCircle } from "react-icons/gr";


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
        <h2 style={{color: "white"}}>
          Your cart is empty!
        </h2>
      </div>
    );
  }

  function alertIfCartHasItems() {
    if (cartItems.length > 0) {
      alert("Checkout Successful");
    }
    else{
      alert("You have no items in the cart");
    }
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
              <div className="kart-column">
                <h2 className="kart-title">{item.model}</h2>
                <p className="kart-text">Manufactured by {item.brand}</p>
                <p className="kart-text">Color: {item.color}</p>
              </div>
              <div className="kart-column">
                <div className="motokart-price">
                    <h2 className="kart-main-text">Price:</h2>
                    <p className="kart-text">${item.price}</p>
                </div>
              </div>
              <div className="kart-column">
                <div className="quantity-container">
                  <h2 className="kart-main-text">Quantity</h2>
                    <button
                      onClick={() => subtractQuantity(item)}
                      disabled={item.quantity === 1}
                    >
                     <GrSubtractCircle />
                    </button>
                    <span className="kart-text">{item.quantity}</span>
                    <button onClick={() => addQuantity(item)}><IoMdAdd /></button>
                </div>
              </div>

              <div className="kart-column">
                <div className="motokart-total-per-item">
                  <h3 className="kart-main-text">Total:</h3>
                  <span className="kart-text">${item.price * item.quantity}</span>
                </div>
              </div>

              <div className="button-container">
                <button onClick={() => removeFromCart(item)} className="removalbutton">
                  Remove
                </button>
              </div>
            </div>
          </div> 
        ))}
        
        <div className="summation-container">
          <div className="motokart-summary">
            <div className="summation-div">
              <h4 className="kart-text">Items: {cartItems.length}</h4>
            </div>
            <div className="summation-div">
              <h3 className="kart-main-text">Total:</h3>
              <h3 className="kart-main-text">${total}</h3>
            </div>
          </div>
        </div>
        <div className="motokart-checkout">
        <button onClick={() => alertIfCartHasItems()}><b>Checkout</b></button>  
        </div>
      </div>
    </div>
  );
}

export default MotoKart;

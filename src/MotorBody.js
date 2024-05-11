import React from "react";
import "./MotorBody.css";
import MotorItem from "./MotorItem";

function MotorBody({ addToCart }) {
  return (
    <div className="container">
      <div className="card-container">
        <MotorItem addToCart={addToCart} />
      </div>
    </div>
  );
}

export default MotorBody;

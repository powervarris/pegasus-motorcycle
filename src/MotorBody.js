import React, { useState } from 'react';
import "./MotorBody.css";
import MotorItem from "./MotorItem";
import motorcycles from './Data';

function MotorBody({ addToCart, filteredData}) {

  return (
    <div className="container">
      <div className="card-container">
        <MotorItem addToCart={addToCart} filteredData = {filteredData} />
      </div>
    </div>
  );
}

export default MotorBody;

import React, { useState } from 'react';
import "./MotorItem.css";
import motorcycles from "./Data";
import Motors from "./Motors";

function MotorItem({ addToCart, removeFromCart, filteredData }) {

  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: 1, imgSRC: item.img });
  };


  return (

    <ul className='motocard'>
      {filteredData.map((motorcycles) => (
        <li key = {motorcycles.motorKey} className='motocards-item'>
          <Motors
            id={motorcycles.motorKey}
            img={motorcycles.imgSRC}
            brand={motorcycles.brand}
            model={motorcycles.model}
            color={motorcycles.color}
            price={motorcycles.price}
            addToCart={handleAddToCart}
            removeFromCart={removeFromCart}
          />
        </li>
      ))}
    </ul>
  );
}

export default MotorItem;

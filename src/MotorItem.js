import React, { useState } from 'react';
import "./MotorItem.css";
import motorcycles from "./Data";
import Motors from "./Motors";

function MotorItem({ addToCart, removeFromCart, filteredData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const displayedData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: 1, imgSRC: item.img });
  };

  const pageNumbers = Math.ceil(filteredData.length / itemsPerPage);

  const paginationButtons = Array.from({ length: pageNumbers }, (_, i) => i + 1).map(pageNumber => {
    const isCurrentPage = pageNumber === currentPage;
    const buttonClassName = isCurrentPage ? 'page-item active' : 'page-item';

    return (
      <button key={pageNumber} onClick={() => handlePageChange(pageNumber)} className={buttonClassName}>{pageNumber}</button>
    );
  });

  return (
    <div>
      <ul className='motocard'>
        {displayedData.map((motorcycles) => (
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
      <div className="pagination">
        {paginationButtons}
      </div>
    </div>
  );
}

export default MotorItem;

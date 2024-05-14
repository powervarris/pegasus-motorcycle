import React, { useState } from "react";
import Modal from "react-modal";
import "./Motors.css";
import { motorcycles } from "./Data";

function Motors(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="motocard-container">
      <div className="motocard">
        <div className="motorcard-image">
          <img src={props.img} alt="" />
        </div>
        <div className="motorcard-details">
          <h1 className="model-text">{props.model.toUpperCase()}</h1>
          <p className="p1">Manufactured by {props.brand}</p>
          <br/>
          <p className="props-text">${props.price}</p>
        </div>
        <div className="add-to-cart-button">
          <button onClick={openModal}>See Motor Details</button>
          <button onClick={() => props.addToCart(props)}>Add to Cart</button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Motor Details"
        className="modal-content"
      >
        <div className="modal-header">
          <h2 className="modal-title">{props.model}</h2>
        </div>
        <div className="modal-body">
          <p className="modal-text-big">{props.brand} {props.manuDate}</p>
          <div className="modal-sub-text">
            <p className="modal-text">Color: {props.color}</p>
            <p className="modal-text">Price: ${props.price}</p>
          </div>
          <div className="modal-image-container">
            <img src={props.img} className="modal-image" alt="motorimage" />
          </div>
          <button className="modal-close-btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Motors;

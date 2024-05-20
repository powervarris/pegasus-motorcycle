import React, { useState } from "react";
import Modal from "react-modal";
import "./Motors.css";
import { motorcycles } from "./Data";

function Motors(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [props.img, props.img1, props.img2, props.img3];

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function nextImage() {
    setCurrentImage((currentImage + 1) % images.length);
  }

  function previousImage() {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
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
          <button onClick={() => {
            props.addToCart(props);
            alert('Added to cart')
          }}>Add to Cart
          </button>
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
            <p className="modal-text">Motor Type: {props.type}<br/><br/></p>
            <p className="modal-text">Engine Size: {props.engineSize}<br/><br/></p>
            <p className="modal-text">Engine Type:{props.engineType}<br/><br/></p>
            <p className="modal-text">Torque: {props.torque}<br/><br/></p>
            <p className="modal-text">Available colors: <br/> {props.color}<br/><br/></p>
            <p className="modal-text">Price: ${props.price}</p>
          </div>
          <div className="modal-image-container">
            <img src={images[currentImage]} className="modal-image" alt="motorimage"/>
            <button onClick={previousImage}>Previous</button>
            <button onClick={nextImage}>Next</button>
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

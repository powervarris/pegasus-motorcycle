import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./Motors.css";
import { motorcycles } from "./Data";

function Motors(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    function addToCart() {
        setCartItems(prevItems => [...prevItems, props]);
    }

    useEffect(() => {
        Modal.setAppElement('#root');
    }, []);

    return (
        <div className="motocard-container">
            <div className="motocard">
                <div className="motorcard-image">
                    <img src={props.img} alt="" />
                </div>
                <div className="motorcard-details">
                    <h1>{props.model}</h1>
                    <p className="p1">Manufactured by {props.brand}</p>
                    <p>
                        <b>Color:</b> {props.color}
                    </p>
                    <p>
                        <b>Price:</b> ₱{props.price}
                    </p>
                </div>
                <div className="add-to-cart-button">
                    <button onClick={openModal}>See Motor Details</button>
                    <button onClick={addToCart}>Add to Cart</button>
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
                    <button className="modal-close-button" onClick={closeModal}>Close</button>
                </div>
                <div className="modal-body">
                    <p>Manufactured by {props.brand}</p>
                    <p>Color: {props.color}</p>
                    <p>Price: ₱{props.price}</p>
                </div>
            </Modal>

            <div className="cart-items">
                {cartItems.map((item, index) => (
                    <div key={index}>
                        <h2>{item.model}</h2>
                        <p>Manufactured by {item.brand}</p>
                        <p>Color: {item.color}</p>
                        <p>Price: ₱{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Motors;
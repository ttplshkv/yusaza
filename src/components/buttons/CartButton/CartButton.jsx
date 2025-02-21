import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import ModalWindow from "../../modal/ModalWindow";


const CartButton = () => {
const [modalIsOpen, setModalIsOpen] = useState(false);
const navigate = useNavigate();

const openModal = () => {
    setModalIsOpen(true);
};

const closeModal = () => {
    setModalIsOpen(false);
    navigate("/cart")
};
    return (
        <div style={{float: "right"}}>

                <button className="btn" onClick={() => setModalIsOpen(true)}>
                    Перейти в корзину
                </button>

            <ModalWindow isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
        </div>
    );
};

export default CartButton;

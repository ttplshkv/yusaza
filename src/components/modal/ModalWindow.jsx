import React from "react";
import Modal from "react-modal";
import CartPage from "../../pages/CartPage";

const CartModal = ({isOpen, onClose}) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}  style={{
            overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.5)" // затемнение фона
            },
            content: {
                width: "1000px",  // Устанавливаем ширину
                height: "700px", // Устанавливаем высоту
                margin: "auto", // Центрируем
                borderRadius: "10px", // Закругляем углы
                padding: "20px" // Отступ внутри модалки
            }
        }}
        >
            <div style={{position: "relative", padding: "20px"}}>
                <CartPage/>
                <button style={{color: "gray"}} className="btn" onClick={onClose} style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "none",
                    border: "none",
                    fontSize: "18px",
                    cursor: "pointer",
                    color: "gray"
                }}>Назад
                </button>
            </div>
        </Modal>
    );
};

export default CartModal;

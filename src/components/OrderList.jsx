import React from 'react';
import useOrders from "../hooks/useOrders";
import OrderItem from "./items/OrderItem";

const OrderList = ({isCompleted}) => {
    const {orders, error} = useOrders();

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div>
            {orders
                .filter(order => isCompleted ? order.isCompleted : !order.isCompleted)
                .map(order => (
                    <OrderItem key={order._id} order={order}/>
                ))}
        </div>
    );
};

export default OrderList;
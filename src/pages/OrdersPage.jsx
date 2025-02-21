import React from 'react';
import OrderList from "../components/OrderList";

const OrdersPage = ({ isCompleted }) => {
    return (
        <div>
            <h1>Страница заказов</h1>
            <OrderList isCompleted={isCompleted} />
        </div>
    );
};

export default OrdersPage;
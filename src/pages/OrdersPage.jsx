import React from 'react';
import OrderList from "../components/OrderList";
import {Link} from "react-router-dom";

const OrdersPage = ({isCompleted}) => {
    return (
        <div>
            {location.pathname === '/orders' && (
                <Link to={`/orders/complete`}>
                    <button className="btn btn-outline-primary position-absolute end-0">
                        Выполненные заказы
                    </button>
                </Link>

            )}

            {location.pathname === '/orders/complete' && (
                <Link to={`/orders`}>
                    <button className="btn btn-outline-primary position-absolute end-0">
                        Не выполненные заказы
                    </button>
                </Link>
            )}

            <h1 className="text-center">Страница заказов</h1>

            <OrderList isCompleted={isCompleted}/>
        </div>
    );
};

export default OrdersPage;
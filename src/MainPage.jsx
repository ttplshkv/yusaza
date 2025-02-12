import React from 'react';
import {Link} from "react-router-dom";

function MainPage() {
    return(
        <div>
            <p>Главная страница</p>
            <Link to="/pizzas">Пиццы</Link>
        </div>
    )
}
export default MainPage;
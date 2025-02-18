import React from 'react';
import {Link} from 'react-router-dom';

const MainButton = () => {
    return (
        <Link to="/">
            <button className="btn btn-primary">
                Главная страница
            </button>
        </Link>
    );
};

export default MainButton;

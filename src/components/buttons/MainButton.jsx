import React from 'react';
import {Link} from 'react-router-dom';

const MainButton = () => {
    return (
        <Link to="/">
                <button style={{color: "gray"}} className="btn">
                    Главная страница
                </button>
        </Link>
    );
};

export default MainButton;

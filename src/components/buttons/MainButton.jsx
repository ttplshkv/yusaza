import React from 'react';
import { Link } from 'react-router-dom';

const MainButton = () => {
  return (
    <Link to="/">
      <button className="main-button">
        Главная страница
      </button>
    </Link>
  );
};

export default MainButton;

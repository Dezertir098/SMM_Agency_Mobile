import React, { useState } from 'react';
import './header.css'; // Подключим стили
import Button from './button';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Состояние меню

  // Функция для переключения состояния меню на мобильных устройствах
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container" id="header">
      {/* Логотип */}
      <img className="logo" src="/SMM_Agency_Mobile/Derry_Logo.png" alt="Derry Logo" />
      
      {/* Кнопка меню для мобильных */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
        <span className="menu-icon"></span>
      </div>
      
      {/* Меню */}
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a className="menu_text" href="#about_us">О нас</a></li>
          <li><a className="menu_text" href="#services">Услуги</a></li>
          <li><a className="menu_text" href="#rev">Отзывы</a></li>
          <li><a className="menu_text" href="#cases">Кейсы</a></li>
        </ul>
        <Button />
      </div>
    </header>
  );
}

export default Header;

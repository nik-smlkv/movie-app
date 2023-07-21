import React from "react";
import "../../styles/style.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__body">
          <div className="header__logo">
            <img src="./img/Logo.svg" alt="Logo" />
          </div>
			 <ul className="header__list">
				<li className="header__item item"><button className="item__button button">Кино</button></li>
				<li className="header__item item"><button className="item__button ">События</button></li>
				<li className="header__item item"><button className="item__button ">Спорт</button></li>
			 </ul>
			 <div className="header__search">
				<div className="search__logo"><img src="./img/Search.svg" alt="Search" /></div>
			 </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

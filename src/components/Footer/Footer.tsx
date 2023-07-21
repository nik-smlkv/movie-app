import React from "react";
import "../../styles/style.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__body">
          <div className="footer__subscribe subscribe">
            <div className="subscribe__logo">
              <img src="./img/Logo.svg" alt="Logo" />
            </div>
            <div className="subscribe__text">
              <p>
                Подпишись, оставь телефон или e-mail <br></br> для получения
                рекламных сообщений.
              </p>
            </div>
            <button className="subscribe__button button">Подписаться</button>
          </div>
          <div className="footer__movie movie">
            <ul className="movie__list">
              <li className="movie__item">Кино</li>
              <li className="movie__item">Кинотеатр «Октябрь»</li>
              <li className="movie__item">Кинотеатр «Ноябрь»</li>
            </ul>
          </div>
          <div className="footer_events events">
            <ul className="events__list">
              <li className="events__item">Мероприятия</li>
              <li className="events__item">Концерты</li>
              <li className="events__item">Бои</li>
              <li className="events__item">Семинары</li>
              <li className="events__item">Прочее</li>
            </ul>
          </div>
          <div className="footer__sport sport">
            <ul className="sport__list">
              <li className="sport__item">Спорт</li>
              <li className="sport__item">Разовое посещение</li>
              <li className="sport__item">Купить абонемент</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__subscrib">
        <div className="subscribe__title">
          <p>Подписка</p>
          <button className="subscribe__exit">
            <img src="./img/exit.svg" alt="exit" />
          </button>
        </div>
        <div className="subscribe__subtitle">
          <p>
            Подпишись, оставь телефон или e-mail <br></br> для получения
            рекламных сообщений.
          </p>
        </div>
        <button className="subscribe__link button">Подписаться</button>
      </div>
      <div className="footer__content">
        <div className="footer__pay pay">
          <div className="pay__belcard">
            <img
              src="./img/footer/belcard.png"
              alt="BelCard Internet Password"
            />
          </div>
          <div className="pay__belcard2">
            <img src="./img/footer/belcard__logo.png" alt="BelCard" />
          </div>
          <div className="pay__mastercard">
            <img src="./img/footer/mastercard__logo.png" alt="MasterCard" />
          </div>
          <div className="pay__mastercard2">
            <img
              src="./img/footer/MasterCard_2.png"
              alt="MasterCard SecureCode"
            />
          </div>
          <div className="pay__visa">
            <img src="./img/footer/Visa.png" alt="Visa" />
          </div>
          <div className="pay__webpay">
            <img src="./img/footer/WebPay.png" alt="WebPay" />
          </div>
        </div>
        <div className="footer__politic">
          <p>Политика конфиденциальности, Договор публичной оферты</p>
        </div>
        <div className="footer__adress">
          <p>
            © 2023 ООО «Кино-инвест», г. Минск, ул. Матроскина, 23 УНП 101333338
            тел: 8 017 217-11-77
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

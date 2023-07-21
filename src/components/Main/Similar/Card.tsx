import React from "react";
import "../../../styles/style.scss";

export type CardType = {
  id: number;
  title: string;
  subtitle: string;
  imgPath: string;
  score: string;
  premier: string;
  age: string;
};

type PropsType = {
  id: number;
  title: string;
  subtitle: string;
  imgPath: string;
  score: string;
  premier: string;
  age: string;
  card: Array<CardType>;
};
const Card = (props: PropsType) => {
  return (
    <div className="similar__card card">
      <div className="card__img">
        <img src={props.imgPath} alt="Megan" />
      </div>
      <div className="card__info">
        <div className="card__title">
          <h4>{props.title}</h4>
        </div>
        <div className="card__subtitle">
          <p>{props.subtitle}</p>
        </div>
        <div className="card__description">
          <div className="card__score">
            <img src="./img/description/ic_round-star.svg" alt="star" />
            <p>{props.score}</p>
          </div>
          <div className="card__premier">
            <p>{props.premier}</p>
          </div>
          <div className="card__age">
            <p>{props.age}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

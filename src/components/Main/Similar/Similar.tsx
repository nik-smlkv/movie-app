import React from "react";
import "../../../styles/style.scss";
import Card, { CardType } from "./Card";
const Similar = () => {

	let card: Array<CardType> = [
		{id: 1, title: "Меган", subtitle: "Триллер, Криминальный, Драма, до 16 ноября 2022, Франция", imgPath: './img/card/Megan.png', score: "6.5", premier: 'Премьера', age:"16+"},
		{id: 2, title: "Быстрее пули", subtitle: "Триллер, Криминальный, Драма, до 16 ноября 2022, Франция", imgPath: './img/card/BistreePuli.png', score: "6.5", premier: 'Премьера', age:"16+"},
		{id: 3, title: "Земун", subtitle: "Триллер, Криминальный, Драма, до 16 ноября 2022, Франция", imgPath: './img/card/Zemun.png', score: "6.5", premier: 'Премьера', age:"16+"},
		{id: 4, title: "Элвис", subtitle: "Триллер, Криминальный, Драма, до 16 ноября 2022, Франция", imgPath: './img/card/Elvis.png', score: "6.5", premier: 'Премьера', age:"16+"},
		{id: 5, title: "Изумительный Морис", subtitle: "Триллер, Криминальный, Драма, до 16 ноября 2022, Франция", imgPath: './img/card/Moris.png', score: "6.5", premier: 'Премьера', age:"16+"},
		{id: 6, title: "Крушение", subtitle: "Триллер, Криминальный, Драма, до 16 ноября 2022, Франция", imgPath: './img/card/Krushenie.png', score: "6.5", premier: 'Премьера', age:"16+"},
	];
  return (
    <section className="similar">
      <div className="similar__container">
        <div className="similar__title">
          <h3>Похожие по жанру</h3>
        </div>
        <div className="similar__body">
          <div className="similar__content">
				{card.map((c)=>{
					return <Card 
						id={c.id}
						title={c.title}
						subtitle={c.subtitle}
						imgPath={c.imgPath}
						score={c.score}
						premier={c.premier}
						age={c.age} 
						card={card}					/>
				})}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Similar;

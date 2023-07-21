import React from 'react'
import "../../../styles/style.scss";
const Description = () => {
  return (
	<section className="description">
		<div className="description__body">
			<div className="description__block block">
				<div className="block__image">
					<img src="./img/description/elvis.png" alt="Elvis" />
					<div className="block__image-play"><img src="./img/Play.png" alt="Play" /></div>
					<div className="description__text">
						<div className="description__release"><p>2022, США, 1ч 45 мин, В прокате до 26 ноября</p></div>
						<div className="description__name"><h1>Элвис</h1></div>
					</div>
				</div>
				<div className="block__button button button-none">Купить билет (от 6 руб.)</div>
			</div> 
			<div className="description__content content">
				<div className="content__text">
					<div className="content__release"><p>2022, США, 1ч 45 мин, В прокате до 26 ноября</p></div>
					<div className="content__name"><h1>Элвис</h1></div>
				</div>
				<div className="content__attachment attachment">
					<div className="attachment__score">
						<img src="./img/description/ic_round-star.svg" alt="star" />
					 	<p>6.5</p>
						</div>
					<div className="attachment__premier"><p>Премьера</p></div>
					<div className="attachment__genre"><p>Боевик</p></div>
					<div className="attachment__genre"><p>Детектив</p></div>
					<div className="attachment__age"><p>16+</p></div>
				</div>
				<div className="content__body">
					<div className="content__score score">
						<div className="score__iMDb">
							<ul className="score__list">
								<li className="score__item item"><p className="item__name">iMDb</p></li>
								<li className="score__item"><p>256 отзывов</p></li>
							</ul>
							<div className="score__text"><p>9.2</p></div>
						</div>
						<span></span>
						<div className="score__Kinopoisk">
						<ul className="score__list">
								<li className="score__item"><p className="item__name-uppercase">Кинопоиск</p></li>
								<li className="score__item"><p>132 отзыва</p></li>
							</ul>
							<div className="score__text"><p>8.7</p></div>
						</div>
					</div>
					<div className="score__button button">Купить билет (от 6 руб.)</div>
				</div>
				<div className="content__information">
					<div className="content__info info">
						<ul className="info__premier">
							<li className="info__item">Премьера</li>
							<li className="info__item">16 февраля 2023</li>
						</ul>
						<ul className="info__age">
							<li className="info__item">Возраст</li>
							<li className="info__item">12+</li>
						</ul>
						<ul className="info__country">
							<li className="info__item">Страна</li>
							<li className="info__item">США</li>
						</ul>
						<ul className="info__filmmaker">
							<li className="info__item">Режиссер</li>
							<li className="info__item">Дэвид Личт</li>
						</ul>
					</div>
					<div className="content__role">
						<div className="content__title"><p>В ролях</p></div>
						<p>Брэд Питт, Джои Кинг, Аарон Тейлор-Джонсон, Брайан Тайри, 
							Генри Эндрю, Кодзи Хироюки, Санада Бэд Банни, Логан Лерман, 
							Зази Битц, Майкл Шеннон
						</p>
					</div>
				</div>
				<div className="content__fragment fragment">
					<div className="fragment__title"><h2>Фрагменты и описания</h2></div>
					<ul className="fragment__list">
						<li className="fragment__item"><img src="./img/description/fragment1.png" alt="First fragment" /></li>
						<li className="fragment__item"><img src="./img/description/fragment2.png" alt="Second fragment" /></li>
						<li className="fragment__item"><img src="./img/description/fragment3.png" alt="Third fragment" /></li>
					</ul>
					<div className="fragment__characteristic characteristic">
						<p>Наёмник под кодовым именем Божья Коровка отправляется на новую миссию: 
							вместо заболевшего коллеги он должен сесть в скоростной поезд Токио — Киото, выкрасть чемоданчик и сойти на промежуточной станции. 
							Но выполнение простого задания сильно осложняется, когда выясняется, что состав просто кишит всевозможными киллерами.
						</p>
						<button className="characteristic__unfolding">
							Развернуть
						</button>
					</div>
					<div className="fragment__content">
						<span></span>
						<div className="content__info info">
						<ul className="info__premier">
							<li className="info__item">Премьера</li>
							<li className="info__item">16 февраля 2023</li>
						</ul>
						<ul className="info__age">
							<li className="info__item">Возраст</li>
							<li className="info__item">12+</li>
						</ul>
						<ul className="info__country">
							<li className="info__item">Страна</li>
							<li className="info__item">США</li>
						</ul>
						<ul className="info__filmmaker">
							<li className="info__item">Режиссер</li>
							<li className="info__item">Дэвид Личт</li>
						</ul>
						</div>
						<span></span>
						<div className="content__role">
							<div className="content__title"><p>В ролях</p></div>
							<p>Брэд Питт, Джои Кинг, Аарон Тейлор-Джонсон, Брайан Тайри, 
								Генри Эндрю, Кодзи Хироюки, Санада Бэд Банни, Логан Лерман, 
								Зази Битц, Майкл Шеннон
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Description
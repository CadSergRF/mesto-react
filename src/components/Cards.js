import React from 'react'

const Cards = ({ cardData, onCardClick }) => {
  return (
    <li className="places__item">
      <article className="place">
        <img className="place__image" src={cardData.link} alt={cardData.name} onClick={onCardClick} />
        <button className="place__delete" type="button" aria-label="Кнопка удаления place"></button>
        <div className="place__info">
          <h2 className="place__title">{cardData.name}</h2>
          <div>
            <button className="place__like" type="button" aria-label="Кнопка лайк"></button>
            <p className="place__num-of-likes">{cardData.likes.length}</p>
          </div>
        </div>
      </article>
    </li>
  )
}

export default Cards
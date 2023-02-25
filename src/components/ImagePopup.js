import React from 'react'

const ImagePopup = ({ card, onClose }) => {
  return (
    <div className={`popup popup_big-image_bgc  ${card.src && "popup_opened"}`} id="enhance-image">
        <div className="popup__image-container">
          <img src={card.src} alt={card.alt} className="popup__image-big" />
          <button 
          className="popup__close-btn" 
          type="button" 
          aria-label="Кнопка закрытия окна добавления контента"
          onClick={onClose}
          ></button>
          <h3 className="popup__image-title">{card.alt}</h3>
        </div>
      </div>
  )
}

export default ImagePopup
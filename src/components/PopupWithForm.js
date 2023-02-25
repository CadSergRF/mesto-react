import React from 'react'

const PopupWithForm = (props) => {
  return (
    <div className={`popup ${props.isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          className="popup__close-btn"
          type="button"
          aria-label="Кнопка закрытия модального окна"
          onClick={props.onClose}>
        </button>
        <h3 className="popup__title">{props.title}</h3>
        <form className="popup__form" name={`${props.name}`}>
          {props.children}
          <button className="popup__save-btn" type="submit" aria-label="Кнопка сохранить изменения">{props.btnSubmitText}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm
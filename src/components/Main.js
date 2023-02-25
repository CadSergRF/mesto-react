import React from 'react'

const Main = (props) => {

  

  return (
    <main className="root__container">
      {/* <!-- профиль пользователя --> */}
      <section className="user-profile root__user-profile">
        <div className="user-profile__avatar-wrapper" onClick={props.onEditAvatar}>
          <img className="user-profile__photo" alt="Аватар"/>
        </div>
        <div className="user-profile__info-wrapper">
          <h1 className="user-profile__name">Жак-Ив Кусто</h1>
          <button
            className="user-profile__edit"
            type="button"
            aria-label="Кнопка редактирования профиля"
            onClick={props.onEditProfile}>
          </button>
          <p className="user-profile__job"></p>
        </div>

        <button
          className="user-profile__add-place"
          type="button"
          aria-label="Кнопка добавления контента"
          onClick={props.onAddPlace}>
        </button>
      </section>
      {/* <!-- Секция контента --> */}
      <section className="places" aria-label="Фотографии">
        <ul className="places__list">
        </ul>
      </section>

    </main>
  )
}

export default Main
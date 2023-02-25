import React, { useEffect, useState } from 'react'
import api from '../utils/Api';
import Cards from './Cards';

const Main = (props) => {

  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])


  return (
    <main className="root__container">
      {/* <!-- профиль пользователя --> */}
      <section className="user-profile root__user-profile">
        <div className="user-profile__avatar-wrapper" onClick={props.onEditAvatar}>
          <img className="user-profile__photo" alt="Аватар" src={userAvatar} />
        </div>
        <div className="user-profile__info-wrapper">
          <h1 className="user-profile__name">{userName}</h1>
          <button
            className="user-profile__edit"
            type="button"
            aria-label="Кнопка редактирования профиля"
            onClick={props.onEditProfile}>
          </button>
          <p className="user-profile__job">{userDescription}</p>
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
          {
            cards.map((cardData) => (
              <Cards 
              cardData={cardData}
              key={cardData._id}
              />
            ))
          }
        </ul>
      </section>

    </main>
  )
}

export default Main
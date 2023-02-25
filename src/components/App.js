import '../index.css';
import Footer from './Footer';
import Header from './Header'
import Main from './Main'
import { useState } from 'react';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div className="root">


      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onClose={closeAllPopups}
      />

      <Footer />

      {/* <!-- Попап "Редактирование профиля"--> */}
      <div className={`popup ${isEditProfilePopupOpen && "popup_opened"}`} id="edit-profile">
        <div className="popup__container">
          <button 
          className="popup__close-btn" 
          type="button" 
          aria-label="Кнопка закрытия окна редактирования профиля" 
          onClick={closeAllPopups}></button>
          <h3 className="popup__title">Редактировать профиль</h3>
          <form className="popup__form" name="editProfile">
            <input className="popup__input popup__input_edit_name" type="text" placeholder="Ваше имя/ник" name="editProfileName"
              minLength="2" maxLength="40" required />
            <span className="popup__input-error editProfileName-error"></span>
            <input className="popup__input popup__input_edit_job" type="text" placeholder="Ваша должность" name="editProFileJob"
              minLength="2" maxLength="200" required />
            <span className="popup__input-error editProFileJob-error"></span>
            <button className="popup__save-btn" type="submit" aria-label="Кнопка сохранить изменения">Сохранить</button>
          </form>
        </div>
      </div>
      {/* <!-- Попап "Добавления контента"--> */}
      <div className={`popup ${isAddPlacePopupOpen && "popup_opened"}`} id="add-place">
        <div className="popup__container">
          <button className="popup__close-btn" type="button" aria-label="Кнопка закрытия окна добавления контента" onClick={closeAllPopups}></button>
          <h3 className="popup__title">Новое место</h3>
          <form className="popup__form" name="addPlace">
            <input className="popup__input popup__input_place_name" type="text" placeholder="Название" name="name" minLength="2"
              maxLength="30" required />
            <span className="popup__input-error name-error"></span>
            <input className="popup__input popup__input_place_link" type="URL" placeholder="Ссылка на картинку" name="link"
              required />
            <span className="popup__input-error link-error"></span>
            <button className="popup__save-btn" type="submit" aria-label="Кнопка сохранить изменения">Создать</button>
          </form>
        </div>
      </div>
      {/* <!-- Попап "Изменение аватара"--> */}
      <div className={`popup ${isEditAvatarPopupOpen && "popup_opened"}`} id="edit-avatar">
        <div className="popup__container">
          <button className="popup__close-btn" type="button" aria-label="Кнопка закрытия окна добавления контента" onClick={closeAllPopups}></button>
          <h3 className="popup__title">Обновить аватар</h3>
          <form className="popup__form" name="editAvatar">
            <input className="popup__input popup__input_place_link" type="URL" placeholder="Ссылка на картинку" name="link"
              required />
            <span className="popup__input-error link-error"></span>
            <button className="popup__save-btn" type="submit" aria-label="Кнопка сохранить изменения">Сохранить</button>
          </form>
        </div>
      </div>
      {/* <!-- Попап "Подтверждение действия" --> */}
      <div className="popup" id="confirm-popup">
        <div className="popup__container">
          <button className="popup__close-btn" type="button" aria-label="Кнопка закрытия окна добавления контента"></button>
          <h3 className="popup__title">Вы уверенны?</h3>
          <form className="popup__form" name="confirmChanges">
            <button className="popup__save-btn" type="submit" aria-label="Кнопка сохранить изменения">Да</button>
          </form>
        </div>
      </div>

      {/* <!-- Попап "Увеличение картинки"--> */}
      <div className="popup popup_big-image_bgc" id="enhance-image">
        <div className="popup__image-container">
          <img src="#" alt="#" className="popup__image-big" />
          <button className="popup__close-btn" type="button" aria-label="Кнопка закрытия окна добавления контента"></button>
          <h3 className="popup__image-title">Увеличенная картинка</h3>
        </div>
      </div>

      {/* <!-- Шаблон карточки place --> */}
      <template id="placeTemplate">
        <li className="places__item">
          <article className="place">
            <img className="place__image" src="#" alt="" />
            <button className="place__delete" type="button" aria-label="Кнопка удаления place"></button>
            <div className="place__info">
              <h2 className="place__title">Название</h2>
              <div>
                <button className="place__like" type="button" aria-label="Кнопка лайк"></button>
                <p className="place__num-of-likes">0</p>
              </div>
            </div>
          </article>
        </li>
      </template>

    </div>
  );
}

export default App;

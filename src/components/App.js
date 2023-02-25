import '../index.css';
import Footer from './Footer';
import Header from './Header'
import Main from './Main'
import { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(event) {
    setSelectedCard(event.target);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="root">

      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      {/* Модалка редактирование профиля */}
      <PopupWithForm
        name="editProfile"
        title="Редактировать профиль"
        btnSubmitText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input className="popup__input popup__input_edit_name" type="text" placeholder="Ваше имя/ник" name="editProfileName"
          minLength="2" maxLength="40" required />
        <span className="popup__input-error editProfileName-error"></span>
        <input className="popup__input popup__input_edit_job" type="text" placeholder="Ваша должность" name="editProFileJob"
          minLength="2" maxLength="200" required />
        <span className="popup__input-error editProFileJob-error"></span>
      </PopupWithForm>

      {/* Модалка Добавления контента */}
      <PopupWithForm
        name="addPlace"
        title="Новое место"
        btnSubmitText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input className="popup__input popup__input_place_name" type="text" placeholder="Название" name="name" minLength="2"
          maxLength="30" required />
        <span className="popup__input-error name-error"></span>
        <input className="popup__input popup__input_place_link" type="URL" placeholder="Ссылка на картинку" name="link"
          required />
        <span className="popup__input-error link-error"></span>
      </PopupWithForm>

      {/* Модалка Изменение аватара */}
      <PopupWithForm
        name="editAvatar"
        title="Обновить аватар"
        btnSubmitText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input className="popup__input popup__input_place_name" type="text" placeholder="Название" name="name" minLength="2"
          maxLength="30" required />
        <span className="popup__input-error name-error"></span>
        <input className="popup__input popup__input_place_link" type="URL" placeholder="Ссылка на картинку" name="link"
          required />
        <span className="popup__input-error link-error"></span>
      </PopupWithForm>

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

      {/* Модалка Увеличение картинки */}
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

    </div>
  );
}

export default App;

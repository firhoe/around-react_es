import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import {api} from '../utils/api';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isDeletePopupOpen, setisDeletePopupOpen] = React.useState(false); 
    
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    api.getUserInfo().then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    });
  }, []);
  
  function onEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function onAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  
    function onEditAvatarClick() {
      setIsEditAvatarPopupOpen(true);
    } 
    
    function closeAllPopups() {
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setIsEditAvatarPopupOpen(false);
    }

    function onDeleteCardClick() {
      setisDeletePopupOpen(true);
    } 
    
  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={onEditProfileClick}
          onAddPlace={onAddPlaceClick}
          onEditAvatar={onEditAvatarClick}
          onDeleteCard={onDeleteCardClick}
          userName={userName}
          userDescription={userDescription}
          userAvatar={userAvatar}
        />
        <Footer />

        <PopupWithForm
          name="edit_profile"
          title="Editar Perfil"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}>
          <>
            <label className="popup__field" htmlFor="popup-input-name">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                id="popup-input-name"
                className="popup__input popup__input_type_name"
                minLength="2"
                maxLength="40"
                required
              />
              <span className="popup__error popup-input-name-error">
                Por favor, rellena este campo.
              </span>
            </label>
            <label className="popup__field" htmlFor="popup-input-about">
              <input
                type="text"
                name="about"
                placeholder="Ocupación"
                id="popup-input-about"
                className="popup__input popup__input_type_about"
                minLength="2"
                maxLength="200"
                required
              />
              <span className="popup__error popup-input-about-error">
                Por favor, rellena este campo.
              </span>
            </label>
          </>
        </PopupWithForm>

        <PopupWithForm
          name="add_card"
          title="Nuevo Lugar"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}>
          <>
            <label className="popup__field" htmlFor="popup-input-title">
              <input
                type="text"
                name="title"
                placeholder="Titulo"
                id="popup-input-title"
                className="popup__input"
                minLength="2"
                maxLength="30"
                required
              />
              <span className="popup__error popup-input-title-error">
                Por favor, rellena este campo.
              </span>
            </label>
            <label className="popup__field" htmlFor="popup-input-link">
              <input
                type="url"
                name="image-link"
                placeholder="Imagen URL"
                id="popup-input-link"
                className="popup__input"
                required
              />
              <span className="popup__error popup-input-link-error">
                Por favor, introduce una dirección web.
              </span>
            </label>
          </>
        </PopupWithForm>

        <PopupWithForm
          name="image_profile"
          title="Cambiar foto de Perfil"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}>
          <>
            <label className="popup__field" htmlFor="popup-input-image">
              <input
                type="url"
                name="image-link"
                placeholder="Imagen URL"
                id="popup-input-image"
                className="popup__input"
                required
              />
              <span className="popup__error popup-input-image-error">
                Introduce una dirección web.
              </span>
            </label>
          </>
        </PopupWithForm>

        <PopupWithForm
          name="delete_card"
          title="Eliminar Lugar"
          isOpen={isDeletePopupOpen}
          onClose={closeAllPopups}
        />

        <section className="popup popup_preview_image">
          <div className="popup__container popup__container_role-image">
            <figure className="popup__figure">
              <img src=" " alt="#" className="popup__image" />
              <figcaption className="popup__caption"></figcaption>
            </figure>
            <button
              type="button"
              className="popup__close-button popup__preview-close-button"
              aria-label="close button"></button>
          </div>
        </section>
      </div>

      <template className="card-template" id="card-template-add">
        <li className="card">
          <button
            type="button"
            className="card__delete-button"
            aria-label="trash button"></button>
          <img src=" " alt="#" className="card__image" />
          <div className="card__information">
            <h2 className="card__title"></h2>
            <div className="card__like-container">
              <button
                type="button"
                className="card__like-button"
                aria-label="Like button"></button>
              <p className="card__like-counter">0</p>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;

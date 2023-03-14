import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {

  function handleEditAvatarClick() {
      const popup = document.querySelector('.popup_image_profile');
      popup.classList.add('popup_opened');
    }

    function handleAddPlaceClick() {
      const popup = document.querySelector('.popup_add_card');
      popup.classList.add('popup_opened');
    }

    function handleEditProfileClick() {
      const popup = document.querySelector('.popup_edit_profile');
      popup.classList.add('popup_opened');
    }

  return (
    <>
      <div className="page">
        <Header />
        <Main 
          onEditAvatar = {handleEditAvatarClick}
          onAddPlace = {handleAddPlaceClick}
          onEditProfile = {handleEditProfileClick}
        />
        <Footer />

        <section className="popup popup_edit_profile">
          <div className="popup__container">
            <button
              type="button"
              className="popup__close-button"
              aria-label="close button"></button>
            <h3 className="popup__title">Editar Perfil</h3>
            <form
              className="popup__form popup__form_type_edit"
              action="#"
              name="edit"
              noValidate>
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
              <button
                type="submit"
                className="popup__button popup__button_type_edit"
                aria-label="save button"
                data-textcontent="Guardar">
                Guardar
              </button>
            </form>
          </div>
        </section>

        <section className="popup popup_image_profile">
          <div className="popup__container">
            <button
              type="button"
              className="popup__close-button"
              aria-label="close button"></button>
            <h3 className="popup__title">Cambiar foto de Perfil</h3>
            <form
              className="popup__form popup__form_type_profile-image"
              action="#"
              name="image"
              noValidate>
              <label className="popup__field" htmlFor="popup-input-image">
                <input
                  type="url"
                  name="image-link"
                  placeholder="Imagen URL"
                  id="popup-input-image"
                  className="popup__input"
                  value
                  required
                />
                <span className="popup__error popup-input-image-error">
                  Introduce una dirección web.
                </span>
              </label>
              <button
                type="submit"
                className="popup__button popup__button_type_profile-image"
                aria-label="save button"
                data-textcontent="Guardar">
                Guardar
              </button>
            </form>
          </div>
        </section>

        <section className="popup popup_add_card">
          <div className="popup__container">
            <button
              type="button"
              className="popup__close-button popup__card-close-button"
              aria-label="close button"></button>
            <h3 className="popup__title">Nuevo Lugar</h3>
            <form
              className="popup__form popup__form_type_add-image"
              action="#"
              name="place"
              id="form-card"
              noValidate>
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
                  value
                  required
                />
                <span className="popup__error popup-input-link-error">
                  Por favor, introduce una dirección web.
                </span>
              </label>
              <button
                type="submit"
                className="popup__button popup__create-card-button"
                aria-label="create button"
                data-textcontent="Crear">
                Crear
              </button>
            </form>
          </div>
        </section>

        <section className="popup popup_delete_card">
          <div className="popup__container">
            <button
              type="button"
              className="popup__close-button popup__delete-close-button"
              aria-label="close button"></button>
            <h3 className="popup__title">¿Estás seguro?</h3>
            <form className="popup__form" action="#" name="delete" noValidate>
              <button
                type="submit"
                className="popup__button popup__button_type_delete"
                aria-label="delete button"
                data-textcontent="Sí">
                Sí
              </button>
            </form>
          </div>
        </section>

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

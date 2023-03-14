import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  
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
    
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isDeletePopupOpen, setisDeletePopupOpen] = React.useState(false); 


  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={onEditProfileClick}
          onAddPlace={onAddPlaceClick}
          onEditAvatar={onEditAvatarClick}
          onDeleteCard={onDeleteCardClick}
        />
        <Footer />

        <PopupWithForm
          name="edit_profile"
          title="Editar Perfil"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          name="add_card"
          title="Nuevo Lugar"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          name="image_profile"
          title="Cambiar foto de Perfil"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />

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

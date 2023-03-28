import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import {api} from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false); 
  const [isCardOpen, setIsCardOpen] = React.useState(false);
  
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [selectedCard, setSelectedCard] = React.useState({});
    
  function onEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function onAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  
  function onEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  } 
  
  function onDeleteCardClick() {
    setIsDeletePopupOpen(true);
  } 

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeletePopupOpen(false);
    setIsCardOpen(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsCardOpen(true);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    api.getCardList().then((res) => {
      setCards(res);
    });
  }, []); 


  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main
            onEditProfile={onEditProfileClick}
            onAddPlace={onAddPlaceClick}
            onEditAvatar={onEditAvatarClick}
            onDeleteCard={onDeleteCardClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            cards={cards}
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

          <ImagePopup
            card={selectedCard}
            isOpen={isCardOpen}
            onClose={closeAllPopups}
          />
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;

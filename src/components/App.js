import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ImagePopup from './ImagePopup';
import {api} from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = React.useState(false); 
  const [isCardOpen, setIsCardOpen] = React.useState(false);
  
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
  
  function onDeleteCardClick(card) {
    setSelectedCard(card);
    setIsDeletePopupOpen(true);
  } 

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsCardOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsDeletePopupOpen(false);
    setIsCardOpen(false);
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

  function handleCardDelete(evt) {
    evt.preventDefault();
    const card = selectedCard;
    api
      .removeCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
        setIsDeletePopupOpen(false);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      });
  }

  function handleUpdateUser({name, about}) {
    api.setUserInfo({name, about}).then((data) => {
      setCurrentUser(data);
      setIsEditProfilePopupOpen(false);
    }).catch((err) => {
      console.log(`Error: ${err}`);
    });
  }

  function handleUpdateAvatar({avatar}) {
    api.setUserAvatar(avatar).then((data) => {
      setCurrentUser(data);
      setIsEditAvatarPopupOpen(false);
    }).catch((err) => {
      console.log(`Error: ${err}`);
    });
  }

  function handleAddPlaceSubmit(name, link) {
    api.addCard({name, link}).then((newCard) => {
      setCards([newCard, ...cards]);
      setIsAddPlacePopupOpen(false);
    }).catch((err) => {
      console.log(`Error: ${err}`);
    });
  }

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
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
          />
          <Footer />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup 
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />

          <PopupWithForm
            name="delete_card"
            title="¿Estás seguro?"
            card={selectedCard}
            isOpen={isDeletePopupOpen}
            onClose={closeAllPopups}
            onSubmit={handleCardDelete}
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

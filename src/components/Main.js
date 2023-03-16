import React from 'react';

function Main(props) {
  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__container">
            <div className="profile__avatar-wrapper">
              <img
                className="profile__image"
                src={props.userAvatar}
                alt="profile image"
              />
              <div
                className="profile__avatar-overlay"
                onClick={props.onEditAvatar}></div>
            </div>
            <div className="profile__information">
              <div className="profile__wrap">
                <h1 className="profile__user">{props.userName}</h1>
                <button
                  type="button"
                  className="profile__edit-button"
                  onClick={props.onEditProfile}></button>
              </div>
              <p className="profile__profession">{props.userDescription}</p>
            </div>
          </div>
          <button
            type="button"
            className="profile__add-button"
            aria-label="add button"
            onClick={props.onAddPlace}></button>
        </section>

        <section className="cards">
          <ul className="cards__container">
            {props.cards.map((card) => (
              <li key={card._id} className="card">
                <button type="button" className="card__delete-button" onClick={props.onDeleteCard}></button>
                <img src={card.link} alt={card.name} className="card__image" />
                <div className="card__information">
                  <h2 className="card__title">{card.name}</h2>
                  <div className="card__like-container">
                    <button
                      type="button"
                      className="card__like-button"></button>
                    <p className="card__like-counter">
                      0
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;

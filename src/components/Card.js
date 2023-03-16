import React from "react";

function Card(props) {
    function handleClick() {
      props.onCardClick(props.card);
    }
    return (
      <>
        <li key={props.card._id} className="card">
          <button
            type="button"
            className="card__delete-button"
            onClick={props.onDeleteCard}></button>
          <img
            src={props.card.link}
            alt={props.card.name}
            onClick={handleClick}
            className="card__image"
          />
          <div className="card__information">
            <h2 className="card__title">{props.card.name}</h2>
            <div className="card__like-container">
              <button type="button" className="card__like-button"></button>
              <p className="card__like-counter">
                {props.card.likes ? props.card.likes.length : 0}
              </p>
            </div>
          </div>
        </li>
      </>
    );
}

export default Card;
import React from "react";

function Card(props) {
    function handleClick() {
      props.onCardClick(props.card);
    }
    return (
      <>
            <li className="card">
            <button type="button" className="card__delete-button"></button>
            <img
                src={props.card.link}
                alt="#"
                className="card__image"
                onClick={handleClick}
            />
            <div className="card__information">
                <h2 className="card__title">{props.card.name}</h2>
                <div className="card__like-container">
                <button type="button" className="card__like-button"></button>
                <p className="card__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
            </li>
      </>
    );
}

export default Card;
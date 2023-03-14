import React from "react";
import profilePic from '../images/imageprofile-pic.jpg';

function Main(props) {

    return (
      <>
        <main className="content">
          <section className="profile">
            <div className="profile__container">
              <div className="profile__avatar-wrapper">
                <img
                  src={profilePic}
                  alt="Profile Pic"
                  className="profile__image"
                />
                <div className="profile__avatar-overlay" onClick={props.onEditAvatar}></div>
              </div>
              <div className="profile__information">
                <div className="profile__wrap">
                  <h1 className="profile__user">Jacques Cousteau</h1>
                  <button
                    type="button"
                    className="profile__edit-button"
                    aria-label="edit profile button" onClick={props.onEditProfile}></button>
                </div>
                <p className="profile__profession">Explorador</p>
              </div>
            </div>
            <button
              type="button"
              className="profile__add-button"
              aria-label="add button" onClick= {props.onAddPlace}></button>
          </section>
          <section className="cards">
            <ul className="cards__container"></ul>
          </section>
        </main>
      </>
    );
}

export default Main;
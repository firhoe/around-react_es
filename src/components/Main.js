import React from "react";
import api from '../utils/api.js';

function Main(props) {
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
    return (
      <>
        <main className="content">
          <section className="profile">
            <div className="profile__container">
              <div className="profile__avatar-wrapper">
                <img
                  style={{backgroundImage: `url(${userAvatar})`}}
                  alt="Profile Pic"
                  className="profile__image"
                />
                <div
                  className="profile__avatar-overlay"
                  onClick={props.onEditAvatar}></div>
              </div>
              <div className="profile__information">
                <div className="profile__wrap">
                  <h1 className="profile__user">{userName}</h1>
                  <button
                    type="button"
                    className="profile__edit-button"
                    aria-label="edit profile button"
                    onClick={props.onEditProfile}></button>
                </div>
                <p className="profile__profession">{userDescription}</p>
              </div>
            </div>
            <button
              type="button"
              className="profile__add-button"
              aria-label="add button"
              onClick={props.onAddPlace}></button>
          </section>
          <section className="cards">
            <ul className="cards__container"></ul>
          </section>
        </main>
      </>
    );
}

export default Main;
import React from "react";

function ImagePopup(props) {
    return (
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
    );
}

export default ImagePopup;
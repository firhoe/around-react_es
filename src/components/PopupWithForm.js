import React from "react";

function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_${props.name} ${
        props.isOpen ? 'popup_opened' : ''
      }`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          onClick={props.onClose}></button>
        <h3 className="popup__title">{props.title}</h3>
        <form
          className={`popup__form popup__form_type_${props.name}`}
          name={props.name}
          noValidate>
          {props.children}
          <label htmlFor="name" className="popup__field"></label>
          <input
            name="name"
            type={'text'}
            id="name"
            className="popup__input"
            required
          />
          <button
            type="submit"
            className={`popup__button popup__button_type_${props.name}`}>
            Guardar
          </button>
        </form>
      </div>
    </section>
  );
}


export default PopupWithForm;
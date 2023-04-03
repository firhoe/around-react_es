import React from 'react';

function PopupWithForm(props) {
  
  const handleInput = (event) => {
    
    const data = props.errors[props.name] ? props.errors[props.name] : {};
    
    if (event.target.validity.valid) {
      data[event.target.name] = '';
    } else {
      data[event.target.name] = event.target.validationMessage;
    }
    const newErrors = {...props.errors};
    newErrors[props.name] = data;
    console.log('arroz', newErrors);
    props.setErrors(data);
  };

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
          onSubmit={props.onSubmit}
          onInput={handleInput}
          noValidate>
          {props.children}
          <button
            type="submit"
            className={`popup__button popup__button_type_${props.name}`}>
            {props.name === 'delete_card' ? 'Si' : 'Guardar'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
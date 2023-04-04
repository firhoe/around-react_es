import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function PopupWithForm(props) {
  const formRef = useRef(null);
  const [formInvalid, setFormInvalid] = useState(props.name !== 'delete_card');

  const handleInput = (event) => {
    const input = event.target;
    const errors = {...props.errors};

    if (!input.form) {
      return;
    }

    if (!input.validity.valid) {
      errors[input.name] = input.validationMessage;
    } else {
      errors[input.name] = '';
    }

    // Actualizar el estado de los errores
    props.setErrors(errors);

    const formInputs = formRef.current.elements;
    if (formInputs.length > 0) {
      const allInputsValid = Array.from(formInputs).every(
        (input) => input.validity.valid
      );
      setFormInvalid(!allInputsValid);
    } else {
      setFormInvalid(false);
    }
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
          className={`popup_form popupform_type${props.name}`}
          name={props.name}
          onSubmit={(evt) => {
            props.onSubmit(evt);
            if (props.name !== 'delete_card') {
              setFormInvalid(true);
            }
          }}
          onInput={handleInput}
          ref={formRef}
          noValidate>
          {props.children}
          <button
            type="submit"
            className={`popup__button popup__button_type_${props.name} 
            ${
              formInvalid & (props.name !== 'delete_card') &&
              'popup__button_disabled'
            }`}
            disabled={formInvalid}>
            {props.name === 'delete_card' ? 'Si' : 'Guardar'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;
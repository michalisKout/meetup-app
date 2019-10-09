import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Title from './Title';
import Button from './Button';

const Modal = ({ titleText, text, closeHandler, display, submitHandler }) => {
  const modalElement = (
    <>
      <div className="modal">
        <div className="modal__wrapper">
          <header>
            <Title text={titleText} isFree={false} />
            <span
              role="button"
              tabIndex="0"
              onKeyPress={closeHandler}
              type="button"
              className="modal__close"
              onClick={closeHandler}
            >
              &times;
            </span>
          </header>
          <div className="modal__content">
            <div className="modal__content__description">{text}</div>
            <div className="modal__content__question">Are you sure?</div>
            <div className="modal__content__buttons-container">
              <Button
                buttonDisabled={false}
                text="Cancel"
                cssClass="modal__content__buttons-container__button"
                clickHandler={closeHandler}
              />
              <Button
                buttonDisabled={false}
                text="Join"
                cssClass="modal__content__buttons-container__button"
                clickHandler={submitHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return display ? ReactDOM.createPortal(modalElement, document.body) : null;
};

Modal.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Modal;

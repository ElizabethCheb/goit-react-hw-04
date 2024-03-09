import React from 'react';
import Modal from "react-modal";
import css from "./ImageModal.module.css";
Modal.setAppElement("#root");
export default function ModalWindow({ image, isOpen, onClose }) {
  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
    >
      <div className={css.wrapper}>
        {image && (
          <img
            className={css.image}
            src={image.urls.regular}
            alt={image.description}
            onClick={onClose}
          />
        )}
        <p className={css.description}>{image.description}</p>
        <p className={css.text}>
          Author: <span className={css.span}>{image.user.name}</span>
        </p>
        <p className={css.text}>
          Likes: <span className={css.span}>{image.likes}</span>
        </p>
      </div>
    </Modal>
  );
}
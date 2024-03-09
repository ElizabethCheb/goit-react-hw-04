import React from 'react';
import css from "./ImageCard.module.css";
export default function ImageCard({ image, onClick }) {
  return (
    <div className={css.wrapper} onClick={onClick}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.description}
      />
    </div>
  );
}
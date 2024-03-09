
import React from 'react';
import ImageCard from './ImageCard/ImageCard';
import css from "./ImageGallery.module.css";
export default function ImageGallery({ items, openModal }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard image={item} onClick={() => openModal(item)} />
        </li>
      ))}
    </ul>
  );
}
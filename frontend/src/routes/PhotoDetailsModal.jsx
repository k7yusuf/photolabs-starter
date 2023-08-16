import React, { useState, useContext } from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import { FavContext } from '../components/FavContext';

const PhotoDetailsModal = ({ photo, onClose, toggleLike }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { favPhotos } = useContext(FavContext);

  const toggleModal = () => {
    setIsModalOpen(false);
    onClose();
  };

  const isFav = favPhotos.includes(photo.id);

  return (
    <div className={`photo-details-modal ${isModalOpen ? 'open' : ''}`}>
      <button
        className="photo-details-modal--close-button"
        onClick={() => toggleModal(photo)} 
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal--content">
        <div className="photo-details-modal--header">
          {/* Add your header content here */}
        </div>
        <img
          src={photo.largeImageUrl} 
          alt={photo.title}
          className="photo-details-modal--image"
        />
        <div className="photo-details-modal--images">
          {/* Add your images content here */}
        </div>
        <div className="photo-details-modal--favorite">
        <button onClick={() => toggleLike(photo.id)}>
               {isFav ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;

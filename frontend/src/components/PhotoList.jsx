import React from "react";
import PhotoListItem from "./PhotoListItem";
import PhotoDetailsModal from '../routes/PhotoDetailsModal';
import { useFavContext } from './FavContext'; 
import "../styles/PhotoList.scss";
import {useState} from "react";

const PhotoList = ({ photoData, toggleLike }) => {
  const { favPhotos } = useFavContext(); 
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };
  if (!photoData) {
    return null; 
  }

  return (
    <div className="photo-list-container">
      <ul className="photo-list">
        {photoData.map((photo) => (
          <PhotoListItem
            key={photo.id}
            data={photo}
            favPhotos={favPhotos}
            toggleLike={toggleLike} 
            onClick={() => openModal(photo)}
          />
        ))}
      </ul>
      {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default PhotoList;

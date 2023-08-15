import React from "react";
import PhotoListItem from "./PhotoListItem";
import PhotoDetailsModal from '../routes/PhotoDetailsModal';
import { useFavContext } from './FavContext'; 
import "../styles/PhotoList.scss";
import {useState} from "react";

const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
];

const PhotoList = () => {
  const { favPhotos } = useFavContext(); 
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photo-list-container">
      <ul className="photo-list">
        {sampleDataForPhotoList.map((photo) => (
          <PhotoListItem
            key={photo.id}
            data={photo}
            favPhotos={favPhotos} // Pass favPhotos to PhotoListItem
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
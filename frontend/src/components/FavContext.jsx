import React, { createContext, useContext, useState } from 'react';

const FavContext = createContext();

export const useFavContext = () => {
  return useContext(FavContext);
};

export const FavProvider = ({ children }) => {
  const [likedPhotos, setLikedPhotos] = useState([]);

  const toggleLike = (photoId) => {
    if (likedPhotos.includes(photoId)) {
      setLikedPhotos(likedPhotos.filter(id => id !== photoId));
    } else {
      setLikedPhotos([...likedPhotos, photoId]);
    }
  };

  return (
    <FavContext.Provider value={{ likedPhotos, toggleLike }}>
      {children}
    </FavContext.Provider>
  );
};

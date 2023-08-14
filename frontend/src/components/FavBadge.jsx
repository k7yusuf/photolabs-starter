import React from 'react';
import FavIcon from './FavIcon';
import { useFavContext } from './FavContext'; // Import the useFavContext hook

import '../styles/FavBadge.scss';

const FavBadge = () => {
  // Access the context
  const { likedPhotos } = useFavContext();

  // Check if there are liked photos
  const isFavPhotoExist = likedPhotos.length > 0;

  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={isFavPhotoExist} />
    </div>
  );
};

export default FavBadge;
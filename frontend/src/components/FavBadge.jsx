import React from 'react';
import FavIcon from './FavIcon';
import { useFavContext } from './FavContext';

import '../styles/FavBadge.scss';

const FavBadge = () => {
  const { favPhotos } = useFavContext();

  const isFavPhotoExist = favPhotos && favPhotos.length > 0;

  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={isFavPhotoExist} />
    </div>
  );
};

export default FavBadge;
